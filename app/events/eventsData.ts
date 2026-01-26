export interface AgendaItem {
	time?: string;
	title: string;
	description?: string;
}

export interface Speaker {
	name: string;
	role?: string;
	bio?: string;
	image?: string;
}

export type ContentBlock =
	| { type: "paragraph"; text: string }
	| {
			type: "image";
			src: string;
			alt?: string;
			caption?: string;
			fullWidth?: boolean;
	  };

export interface EventItem {
	slug: string;
	title: string;
	date: string; // ISO format YYYY-MM-DD
	time?: string;
	location?: string;
	image?: string;
	excerpt?: string;
	content?: string;
	seoTitle?: string;
	seoDescription?: string;
	agenda?: AgendaItem[];
	speakers?: Speaker[];
	registrationLink?: string;
	gallery?: string[];
	contentBlocks?: ContentBlock[];
}

export const events: EventItem[] = [
	{
		slug: "international-day-of-people-with-disability",
		title: "International Day of People With Disability 2024",
		seoTitle:
			"International Day of People With Disability — Mighty Orchid Services",
		seoDescription:
			"Community expo celebrating inclusion across Karratha and the Pilbara — free lunch and local services.",
		date: "2024-12-03",
		time: "10:00 AM – 2:00 PM",
		location: "Tambrey Pavilion, Lot 4227 Tambrey Dr, Nickol WA",
		image: "https://images.pexels.com/photos/6950712/pexels-photo-6950712.jpeg",
		excerpt:
			"A community expo celebrating inclusion, connection and local supports — free lunch provided.",
		content:
			"Join us to celebrate the International Day of People With Disabilities with a community expo filled with connection and support.",
		contentBlocks: [
			{
				type: "paragraph" as const,
				text: "Join us to celebrate the International Day of People With Disabilities with a community expo filled with fun, connection, and support.",
			},
			{
				type: "image" as const,
				src: "/event-assets/international-day-of-people-with-disability.jpeg",
				alt: "Community expo at Tambrey Pavilion",
				caption: "Community expo highlights",
				fullWidth: false,
			},
			{
				type: "paragraph" as const,
				text: "Meet local organisations, explore services and enjoy a free lunch from 12:00 PM to 1:00 PM. Hosted by Good Turn Services and Mighty Orchid Services.",
			},
		],
		registrationLink: "",
		gallery: [],
	},
	{
		slug: "idpwd-2025",
		title: "International Day of People With Disability 2025",
		seoTitle:
			"Event Recap: International Day of People With Disability 2025 — Mighty Orchid Services",
		seoDescription:
			"A detailed look back at the 2025 IDPWD event in Karratha, celebrating community connection, local support, and disability awareness at the Tambrey Pavilion.",
		date: "2025-12-03",
		time: "10:00 AM – 3:00 PM",
		location: "Tambrey Pavilion, Karratha",
		image: "/event-assets/idpwd2025/OITQ7413.JPG",
		excerpt:
			"We look back at a wonderful day at the Tambrey Pavilion, where the Karratha community united to celebrate ability, share resources, and foster genuine connections.",
		content:
			"On December 3rd, the Tambrey Pavilion in Karratha came alive with the spirit of community and inclusion. Mighty Orchid Services was proud to host the 2025 International Day of People With Disability (IDPWD), creating a welcoming space for residents to connect, learn, and celebrate. It was more than just an expo; it was a vibrant testament to the strength and diversity of the Pilbara region, bringing together people from all walks of life to recognize the contributions and achievements of people with disability.",
		contentBlocks: [
			{
				type: "paragraph" as const,
				text: "The atmosphere throughout the day was electric, featuring a diverse lineup of interactive workshops, community stalls, and inclusive activities designed for all ages. Attendees had the unique opportunity to engage directly with local service providers, asking questions and discovering the vast array of resources available right here in Karratha. It was inspiring to witness barriers being broken down as families, individuals, and organizations collaborated to promote a more accessible future.",
			},
			{
				type: "image" as const,
				src: "/event-assets/idpwd2025/OITQ7413.JPG",
				alt: "Community expo setup inside the pavilion",
				caption:
					"Community members and Employees filling our stall with conversation and connection",
				fullWidth: false,
			},
			{
				type: "paragraph" as const,
				text: "True to the Pilbara way of life, hospitality played a central role in the event's success. A free lunch was provided, offering a moment for everyone to pause, break bread together, and forge new friendships in a relaxed and supportive environment. We are incredibly grateful to the local organizations that lent their support and to every community member who attended. Your participation turned a simple date on the calendar into a meaningful celebration of unity.",
			},
			{
				type: "image" as const,
				src: "/event-assets/idpwd2025/IMG_2789.JPG",
				alt: "Community expo setup inside the pavilion",
				caption:
					"A speaker presents on stage during an International Day of People with Disability event.",
				fullWidth: false,
			},
		],
		registrationLink: "",
		gallery: ["/event-assets/idpwd2025/OITQ7413.JPG"],
	},
	{
		slug: "inauguration-mtos-1",
		title: "Inauguration of Mighty Orchid Services",
		seoTitle: "Operational Launch: Mighty Orchid Services (MTOS 1)",
		seoDescription:
			"Documentation of the official operational commencement of Mighty Orchid Services at the Karratha Village Business Center.",
		date: "2025-02-15",
		time: "2:00 PM – 5:00 PM",
		location: "Karratha Village Business Center",
		image: "https://images.pexels.com/photos/8353767/pexels-photo-8353767.jpeg",
		excerpt:
			"The core team convened to finalize operational protocols and mark the official commencement of services.",
		content:
			"The inauguration of Mighty Orchid Services served as the administrative launch for the organization. Held at the Karratha Village Business Center, the session focused on internal alignment rather than public celebration, ensuring all necessary protocols were in place for service commencement.",
		contentBlocks: [
			{
				type: "paragraph" as const,
				text: "There was no formal agenda or ceremony. The afternoon provided a dedicated time for the team to convene, finalize operational procedures, and confirm that the service was active and ready to accept clients.",
			},
			{
				type: "image" as const,
				src: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
				alt: "Team meeting at Karratha Village Business Center",
				caption: "Photo by Marc Mueller from Pexels",
				fullWidth: false,
			},
			{
				type: "paragraph" as const,
				text: "This meeting marked the transition into active operations. With the administrative groundwork completed, the focus has now shifted to the day-to-day delivery of support services.",
			},
		],
		registrationLink: "",
		gallery: [],
	},
{
  "slug": "karratha-hedland-perth-christmas-party",
  "title": "Christmas Celebration: Karratha, Hedland & Perth",
  "seoTitle": "Event Recap: 2025 Christmas Party — Mighty Orchid Services",
  "seoDescription": "A look back at our simultaneous Christmas celebrations in Perth and the Pilbara, bringing our teams and community together.",
  "date": "2025-12-20",
  "time": "6:00 PM – 9:00 PM",
  "location": "Karratha, Hedland & Perth Venues",
  "image": "/event-assets/christmasparty2025/IMG_2746.JPG",
  "excerpt": "A wonderful evening celebrating the end of the year with our teams and families across Western Australia.",
  "content": "On December 20th, Mighty Orchid Services came together for simultaneous celebrations in Perth and Karratha. It was a special opportunity to close out the year and connect our teams from the Pilbara to the city in one shared moment.",
  "contentBlocks": [
    {
      "type": "paragraph" as const,
      "text": "The heart of the evening was about connection. By hosting events at the same time in both locations, we were able to bridge the distance and celebrate as one big team, reminding us all that we're part of the same supportive community no matter the postcode."
    },
    {
      "type": "image" as const,
      "src": "/event-assets/christmasparty2025/IMG_2746.JPG",
      "alt": "Group photo of attendees at the Karratha and Perth venues",
      "caption": "Everyone gathering together to celebrate the year",
      "fullWidth": true
    },
    {
      "type": "paragraph" as const,
      "text": "The vibe was relaxed and fun, a well-deserved break after a busy year. With great music and plenty of laughs, it was a chance for staff and families to kick back, leave the work talk behind, and just enjoy each other's company."
    },
    {
      "type": "image" as const,
      "src": "/event-assets/christmasparty2025/OVKM6845.JPG",
      "alt": "Attendees dancing and socializing",
      "caption": "Good times at the office",
      "fullWidth": false
    },
    {
      "type": "paragraph" as const,
      "text": "Of course, it wouldn't be a Christmas party without a feast. We shared a fantastic meal with plenty of options for everyone, making sure nobody went home hungry."
    },
    {
      "type": "image" as const,
      "src": "/event-assets/christmasparty2025/VASS0053.JPG",
      "alt": "Buffet spread of Christmas food",
      "caption": "Dinner is served!",
      "fullWidth": false
    },
    {
      "type": "paragraph" as const,
      "text": "The best part of the night was seeing our staff and the people we support simply hanging out as friends. It’s moments like these, chatting, laughing, and celebrating together, that build the genuine trust and relationships we value so much."
    },
    {
      "type": "image" as const,
      "src": "/event-assets/christmasparty2025/RKYV7771.PNG",
      "alt": "Employees talking with clients",
      "caption": "Catching up with the community we support",
      "fullWidth": false
    }
  ],
  "registrationLink": "",
  "gallery": []
}].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default events;
