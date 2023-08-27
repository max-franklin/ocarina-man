# Objective: Build a blog website that I can post to

I want a website of my own making where I can write blog posts about my tech and personal (mis)adventures.

# Features

- Landing page
    - Splash image of something I love.. Mountains? Music? Ocarina photo from Mike?
    - A scrolling landing page would be pretty neat... Something cliche like 
        - "Hi, I'm Max", scroll scroll
        - profile photo of max that's decently unassuming, scroll scroll
        - something light hearted about yourself, "I'm an AK boy with a love for the outdoors"
        - "you might have heard me tooting my ocarina if you've ever hiked the chugach!"
        - "When I'm not in the outdoors fiddling around on my ocarina"
        - "You can find me indoors working on sating my techie appetite"
    - Call to action to sign up for email updates of blog posts
    - Display cards for 6 most recent blog posts
- Navbar
    - About me link
    - Social media links/icons
    - Blog posts link
    - Follow my blog link (sign up)
    - Log in link
- Footer
    - Sign up for update button/link
- Login/signup page
- Blog posts page
    - Display list of blog posts from most recent down
        - Title of post
        - First 2-3 sentences
        - Image associated with post (if present)
    - Search bar for looking for blog posts
- Blog page
    - Blog article
    - Like button (+1, only -1 if already liked, restricted to those who are signed up)
- Admin portal page (could be at a different domain, and restricted IP traffic optionally)
    - Login for myself
    - List of blog posts (can be literally just ul, simple ui is fine)
    - Edit, Delete, Hide/Show buttons next to blog posts
    - Add new blog post button
    - Add/Edit blog post page
        - Some simple MD editor
        - Save button
        - Preview button (saves post, shows you the blog page from above)
        - Publish button (makes the post visable)

# Backend data

- User model
    - Roles (admin/follower)
    - Email address
    - Liked blog posts
    - Hashed password? Maybe not if we use a 3rd party service for auth

- Blog post
    - Hidden
    - Content?? (Mark down, images etc? Where do the images get stored?)
    - Number of likes
    - DT Last updated
    - DT Published