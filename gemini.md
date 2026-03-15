# gemini.md — The Law & Data Schema

## Source of Truth: Content Data

```json
{
  "site": {
    "title": "Trenh Tech — From Strategy to Innovation",
    "language": "sv"
  },
  "navigation": {
    "logo": {
      "text": "TRENH TECH",
      "icon": "assets/images/logo.png"
    },
    "links": [
      { "label": "Tjänster", "href": "#tjanster" },
      { "label": "Nyhetsbrev", "href": "#nyhetsbrev" },
      { "label": "Projekt", "href": "#projekt" },
      { "label": "Kontakt", "href": "#kontakt" }
    ],
    "cta": {
      "label": "Boka möte",
      "href": "#kontakt"
    }
  },
  "hero": {
    "headline": "From strategy\nto innovation"
  },
  "about": {
    "text": "Trenh Tech kombinerar strategisk IT och teknisk expertis för att guida företag genom hela den digitala resan. Vi levererar hållbara IT-lösningar inom utveckling, moln, cybersäkerhet och data som driver tillväxt och innovation.",
    "buttons": [
      { "label": "Våra tjänster", "href": "#tjanster", "variant": "outline" },
      { "label": "Boka möte", "href": "#kontakt", "variant": "filled" }
    ]
  },
  "motto": {
    "text": "Code. Cloud. Growth."
  },
  "newsletter": {
    "title": "Nyhetsbrev",
    "subtitle": "Häng med i det senaste inom tech-världen",
    "cards": [
      {
        "image": "assets/images/placeholder-1.jpg",
        "title": "Kommer Ai att ta över..?"
      },
      {
        "image": "assets/images/placeholder-2.jpg",
        "title": ""
      },
      {
        "image": "assets/images/placeholder-3.jpg",
        "title": "Titel på inlägg"
      }
    ]
  },
  "ctaBanner": {
    "text": "Where technology meets business."
  },
  "contact": {
    "headline": "Redo att ta nästa steg?",
    "description": "Kontakta oss så diskuterar vi hur vi kan hjälpa dig att förverkliga din vision. Vi återkommer inom 48h.",
    "fields": [
      { "label": "Namn", "type": "text", "name": "name" },
      { "label": "Mail", "type": "email", "name": "email" },
      { "label": "Meddelande", "type": "textarea", "name": "message" }
    ],
    "submitLabel": "Skicka"
  },
  "footer": {
    "logo": {
      "text": "TRENH TECH",
      "icon": "assets/images/logo.png"
    },
    "linkGroups": [
      {
        "title": "Våra tjänster",
        "links": [
          { "label": "Nyhetsbrev", "href": "#nyhetsbrev" },
          { "label": "Projekt", "href": "#projekt" },
          { "label": "Kontakt", "href": "#kontakt" }
        ]
      }
    ],
    "social": [
      { "platform": "linkedin", "href": "#", "icon": "fab fa-linkedin-in" }
    ]
  }
}
```

## Design Tokens

### Colors
| Token         | Value     |
|---------------|-----------|
| soft-cloud    | #DFE9ED   |
| nordic-sky    | #A0B4BC   |
| steel-cloud   | #65828D   |
| deep-tech     | #233A4A   |
| dark-mode     | #1F2429   |

### Typography
| Role       | Font      |
|------------|-----------|
| Titles     | Almarena  |
| Body/Logo  | Helvetica |

### Button Styles
| Variant | Background   | Border       | Text Color  | Border-Radius |
|---------|-------------|--------------|-------------|---------------|
| outline | transparent | nordic-sky   | nordic-sky  | 24px          |
| filled  | deep-tech   | deep-tech    | soft-cloud  | 24px          |
| cta     | soft-cloud  | soft-cloud   | deep-tech   | 24px          |
