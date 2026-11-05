# SHAMS GTD — multilingual public website foundation

SHAMS GTD is a responsive, installable Progressive Web App (PWA) foundation. It runs in modern desktop and mobile browsers and supports English, Russian, and Uzbek interface languages.

## Included in this release
- English / Русский / O‘zbekcha language switcher (preference saved in this browser)
- Responsive desktop, tablet, and mobile layout
- Installable PWA manifest, app icons, and service worker cache
- Overview, Inbox, Next Actions, Projects, Waiting For, Someday / Maybe, Completed
- Create and delete tasks, mark tasks complete, priorities, due dates, project labels
- Light and dark themes
- Local browser storage

## Run locally
Use a local web server (service workers do not work from a `file://` URL):

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Publish as a public website
This folder is a static website and can be deployed to any HTTPS static host. For example, create a new site in Netlify and deploy the contents of this folder, or connect a GitHub repository and enable a static deployment. Once deployed, anyone with the public URL can open it. On Android, open the URL in Chrome and choose **Install app** / **Add to Home screen**.

## Important: public access is not the same as shared accounts
This release makes the website itself suitable for public hosting, but it is still a front-end prototype:
- Each browser stores its own tasks in local storage.
- There is no user registration, login, cloud database, or cross-device synchronization yet.
- Users cannot see one another's tasks, but data does not follow a user to another device.
- No payment system, admin console, or production backup system is included.

Before launching as a full multi-user service, implement a backend API, PostgreSQL, secure authentication, per-user data authorization, backups, privacy policy, and security testing. Do not put private API keys or bot tokens in frontend files.
