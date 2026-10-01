# BBBC Molino Web Application - Admin Portal & Content Management

> **Developers:** Timothy Q. Villa & Ray Ann Sta. Cruz  
> **Route:** `/admin-blog`

This guide explains how the Admin Portal functions, how content is stored, and how church staff can manage publishings.

---

## 🔐 1. Access & Authentication

- **URL:** `https://www.bbbcmolino.org/admin-blog` (or `/admin-blog` in local development)
- **Default Master Password:** `admin123`
- **Session Authentication:** Once authenticated, login state is preserved in `sessionStorage.getItem('bbbc_admin_auth')` for the current browser session.
- **Password Customization:** Administrators can update the password directly from the **Security & Password** sidebar inside the dashboard.

---

## 💾 2. Content Storage & Architecture

Content published through the Admin Portal is stored in the browser's persistent `localStorage`:

| Storage Key | Data Structure | Purpose |
| :--- | :--- | :--- |
| `bbbc_blog_posts` | Array of objects `{ id, title, category, author, date, description, fileUrl }` | Published preachings, study guides, articles |
| `bbbc_admin_password` | String | Custom administrator master password |

### Categories Available:
1. **Preachings & Sermons** (`preachings`)
2. **Bible Reading Calendar** (`calendar`)
3. **Discipleship Lessons** (`discipleship`)
4. **Sunday School Materials** (`sundayschool`)
5. **Berean Daily Journal** (`journal`)

---

## 📢 3. How Published Content Appears to Users

- Items published in `/admin-blog` appear dynamically in:
  - **The Word Page (`/the-word`):** Displays latest messages and study notes.
  - **Community Posts Page (`/view-posts`):** Allows members to search, filter by category, and download lesson sheets or Google Drive files.

---

## 🔄 4. Future Backend / Cloud Database Upgrade

If the church decides to transition from browser `localStorage` to a shared cloud database (such as Supabase or Firebase):
1. In `src/pages/AdminBlog.tsx`, replace the `localStorage.setItem('bbbc_blog_posts', ...)` calls with API requests.
2. In `src/pages/TheWord.tsx` and `src/pages/ViewPosts.tsx`, fetch posts via standard `fetch()` or a query hook.
3. The component structure and UI are already separated into typed interfaces (`AdminPost`, `ResourceItem`), making this transition fast and painless.
