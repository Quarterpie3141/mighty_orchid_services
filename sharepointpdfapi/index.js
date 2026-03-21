const express = require("express");
const multer = require("multer");
const Docxtemplater = require("docxtemplater");
const PizZip = require("pizzip");
const libre = require("libreoffice-convert");
const { PDFDocument } = require("pdf-lib");
const fs = require("fs");
const path = require("path");
const os = require("os");

libre.convertAsync = require("util").promisify(libre.convert);

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Simple token authentication middleware
const AUTH_TOKEN = process.env.AUTH_TOKEN || "";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: "Missing authentication token" });
  }

  if (token !== AUTH_TOKEN) {
    return res.status(403).json({ error: "Invalid authentication token" });
  }

  next();
};

app.post(
  "/generate-pdf",
  authenticateToken,
  upload.fields([
    { name: "coverPage", maxCount: 1 },
    { name: "mainDocument", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      // 1. Parse field data from request
      const fields = JSON.parse(req.body.fields);

      // 2. Fill in cover page template using docxtemplater
      const coverBuffer = req.files["coverPage"][0].buffer;
      const zip = new PizZip(coverBuffer);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });
      doc.render(fields);
      const filledCoverBuffer = doc
        .getZip()
        .generate({ type: "nodebuffer", compression: "DEFLATE" });

      // 3. Convert filled cover page docx → PDF
      const coverPdfBuffer = await libre.convertAsync(
        filledCoverBuffer,
        ".pdf",
        undefined
      );

      // 4. Convert main document docx → PDF
      const mainBuffer = req.files["mainDocument"][0].buffer;
      const mainPdfBuffer = await libre.convertAsync(
        mainBuffer,
        ".pdf",
        undefined
      );

      // 5. Merge cover PDF + main PDF using pdf-lib
      const mergedPdf = await PDFDocument.create();

      const coverPdf = await PDFDocument.load(coverPdfBuffer);
      const mainPdf = await PDFDocument.load(mainPdfBuffer);

      const coverPages = await mergedPdf.copyPages(
        coverPdf,
        coverPdf.getPageIndices()
      );
      coverPages.forEach((page) => mergedPdf.addPage(page));

      const mainPages = await mergedPdf.copyPages(
        mainPdf,
        mainPdf.getPageIndices()
      );
      mainPages.forEach((page) => mergedPdf.addPage(page));

      const mergedPdfBytes = await mergedPdf.save();

      // 6. Return merged PDF
      res.set({
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="output.pdf"',
      });
      res.send(Buffer.from(mergedPdfBytes));
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  }
);

app.get("/", (req, res) => {
  res.send("");
});

app.listen(3000, () => console.log("API running on port 3000"));

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});