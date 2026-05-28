<h1 align="center"><b>🎬 NETFLIX-Themed Developer Portfolio</b></h1>

![Demo App](/img.jpeg)

## 📌 Introduction
A sleek, animated, **Netflix-inspired portfolio** showcasing your software engineering skills, projects, certifications, blogs, music, and even a mini-game-all wrapped in a professional, cinematic UI.

## ✨ Features

- 🎥 **Cinematic Intro**: Custom animated Netflix logo with intro sound.
- 🔀 **Dynamic Profiles**: Recruiter, Developer, Adventurer, Stalker modes.
- 🧠 **Skills & Timeline**: Interactive skill badges and professional experience timeline.
- 💡 **Project Gallery**: Clean, categorized project showcase with icons.
- 📜 **Certifications**: Badges and links with logos like Google, AWS, Udemy.
- 📰 **Tech Blogs**: Curated Medium links with aesthetic thumbnails.
- 🎶 **Music Vibes**: Favorite artists, albums, and genres.
- 🕹️ **CubeRun Game**: Integrated full-screen 3D game with Netflix-style exit.
- ☕ **Contact Me**: Responsive badge with social icons and email.
- 📱 **Responsive Design**: Mobile-ready Netflix-styled UI with animation.

---

## 🛠️ Tech Stack

| Technology       | Use                            |
|------------------|---------------------------------|
| **React**        | Frontend UI framework           |
| **TypeScript**   | Type safety & component typing  |
| **React Router** | Routing & profile switching     |
| **React Icons**  | Font icons                      |
| **Cloudinary**   | CDN image hosting               |
| **Firebase**     | Hosting / future backend support|
| **LocalStorage** | Session management              |
| **Custom CSS**   | Netflix-themed design system    |

---

## 📂 Project Structure

```shell
Netflix-Portfolio/
│
├── public/                              # Public assets (favicon, images, etc.)
│   ├── images/                          # Static images (logos, profile pics)
│   └── index.html                       # Main HTML file
│
├── src/                                 # Main React application
│   ├── assets/                          # Fonts, audio (e.g., netflix-sound.mp3), misc assets
│   ├── components/                      # Reusable UI components
│   │   ├── Navbar.tsx                   # Netflix-style top navbar
│   │   ├── ProfileCard.tsx              # Profile selector cards
│   │   ├── TopPicksRow.tsx              # Horizontal scroll row (Netflix style)
│   │   ├── ContinueWatching.tsx         # Dynamic cards (music, blogs, game, etc.)
│   │   └── PlayButton.tsx / MoreInfo.tsx # Buttons used in banners
│   │
│   ├── data/                            # Constants & static data
│   │   └── constants.ts                 # Skills, projects, certifications, etc.
│   │
│   ├── pages/                           # Main page components
│   │   ├── NetflixTitle.tsx             # Animated intro splash screen with sound
│   │   ├── Browse.tsx                   # Who's watching? (profile selection)
│   │   ├── ProfilePage.tsx              # Main dashboard page per profile
│   │   ├── WorkExperience.tsx           # Vertical timeline for education/work
│   │   ├── Skills.tsx                   # Categorized skills grid
│   │   ├── Projects.tsx                 # Project gallery with tech stacks
│   │   ├── Certifications.tsx           # Certification cards with icons
│   │   ├── Blogs.tsx                    # Blog summaries with images and links
│   │   ├── Music.tsx                    # Personal music picks and genres
│   │   ├── Reading.tsx                  # Reading recommendations (books/articles)
│   │   ├── Game.tsx                     # Cube Run game iframe with close button
│   │   └── ContactMe.tsx                # Contact info + footer with social links
│   │
│   ├── types/                           # TypeScript interfaces and types
│   │   └── types.ts                     # Interfaces for skills, projects, timelines
│   │
│   ├── App.tsx                          # Main application routes and layout
│   ├── index.tsx                        # Entry point for React DOM rendering
│   └── react-app-env.d.ts               # TypeScript environment types
│
├── styles/ or embedded `*.css`          # Component-specific CSS files
│   └── Navbar.css, Browse.css, etc.     # Netflix-inspired UI styling
│
├── .gitignore                           # Ignored files for git
├── package.json                         # Project dependencies and scripts
├── tsconfig.json                        # TypeScript compiler configuration
└── README.md                            # 📖 Project overview and documentation
```
---

## 🧩 Dynamic Routing

- `/browse`: Who’s watching? → Select Recruiter/Developer/Adventurer etc.
- `/profile/:profileName`: Loads dynamic profile data + background + top picks.
- `/game`: Loads CubeRun game with escape option.
- `/music`, `/projects`, `/skills`, `/contact-me`, `/blogs` → Standalone pages.

🔒 **Session is preserved** using `localStorage` to remember user role on Home clicks.

---

## 🚀 Getting Started

Want to set this up locally? Follow these steps:

1. **Clone the Repository**: Copy the repository to your local system.
2. **Install Dependencies**: Use a package manager to install the required dependencies.

```bash
nvm install 18
nvm use 18
```
After upgrading Node.js, clear your node_modules and reinstall:

```bash
rm -rf node_modules
npm cache clean --force
npm install
```
3. **Run the Project**: Start the development server.

```bash
npm start
```

4. **Visit the Local Server**: Open your browser and navigate to the local server URL.
---

## 🎮 Cube Run Game

- Game is embedded in `/game` route using an iframe.
- Styled Netflix-style with custom close icon to return to profile.
- Full-screen experience with **no scrollbars or zoom** issues.
- Fully responsive and seamless game experience.

---

## 📱 Mobile Support

Fully responsive across:

- 📱 iOS / Android Phones  
- 💻 Desktop & Tablets  
- ✅ Built with `@media` queries and responsive layout principles

---

## 📧 Contact

- 💼 [Portfolio Website](http://sandhit.tech/)
- 📧 Email: [sandhitkarmakar@gmail.com](mailto:sandhitkarmakar@gmail.com)
- 🔗 [LinkedIn](https://www.linkedin.com/in/sandhit-karmakar/)

---


## 🌟 Show Your Support
If you liked the Netflix Portfolio:

- ⭐ Star the repo

- 🔀 Fork and customize

- 🤝 Connect on LinkedIn

---

## Still need help?
Open an issue on our GitHub repository, and we will help you as soon as possible.

Enjoy exploring and extending this project! Feel free to contribute and suggest improvements.

---

## Developer
<table>
    <tr align="center">
        <td>
        Sandhit Karmakar
        <p align="center">
            <img src = "https://avatars.githubusercontent.com/u/90787826?v=4" width="150" height="150" alt="Dhruv Shah">
        </p>
            <p align="center">
                <a href = "https://github.com/Sandhit06">
                    <img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36" alt="GitHub"/>
                </a>
                <a href = "https://www.linkedin.com/in/sandhit-karmakar/" target="_blank">
                    <img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36" alt="LinkedIn"/>
                </a>
                <a href = "mailto:sandhitkarmakar@gmail.com" target="_blank">
                    <img src = "https://www.iconninja.com/files/312/807/734/share-send-email-chat-circle-message-mail-icon.svg" width="36" height="36" alt="Email"/>
                </a>
            </p>
        </td>
    </tr>
</table>

<p align="center">
    Made with ❤️ by <a href="https://github.com/Sandhit06">Sandhit Karmakar</a>
</p>
