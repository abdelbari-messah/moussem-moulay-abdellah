#!/bin/bash

# Script to move unused images to backup directory
# This will help clean up the project by removing unused assets

echo "🧹 Starting cleanup of unused images..."
echo "📁 Moving unused images to backup-unused-images directory..."

# Create backup directory structure
mkdir -p backup-unused-images/all-images/{about,artists2024,blog,contact,cta,demo,event,footer,hero,memory,memory2024,memory2024page,others,sponsors,team,testimonials}
mkdir -p backup-unused-images/{bg,elements,icons,logo,organizers}

# Count of moved files
moved_count=0

# Function to move file if it exists
move_if_exists() {
    local src="$1"
    local dst="$2"
    if [ -f "$src" ]; then
        mv "$src" "$dst"
        echo "✅ Moved: $src"
        ((moved_count++))
    fi
}

echo ""
echo "🖼️  Moving unused about images..."
# About images (keep: about-1.jpg, about-2.png, about-9.JPG, about-13.png, about-15.png)
move_if_exists "public/assets/img/all-images/about/about-3.png" "backup-unused-images/all-images/about/"
move_if_exists "public/assets/img/all-images/about/about-4.jpg" "backup-unused-images/all-images/about/"
move_if_exists "public/assets/img/all-images/about/about-5.jpeg" "backup-unused-images/all-images/about/"
move_if_exists "public/assets/img/all-images/about/about-6.jpeg" "backup-unused-images/all-images/about/"
move_if_exists "public/assets/img/all-images/about/about-7.jpeg" "backup-unused-images/all-images/about/"
move_if_exists "public/assets/img/all-images/about/about-10.png" "backup-unused-images/all-images/about/"
move_if_exists "public/assets/img/all-images/about/about-11.png" "backup-unused-images/all-images/about/"
move_if_exists "public/assets/img/all-images/about/about-12.png" "backup-unused-images/all-images/about/"
move_if_exists "public/assets/img/all-images/about/about-14.png" "backup-unused-images/all-images/about/"

# Move all about-img files (all unused)
for i in {1..25}; do
    move_if_exists "public/assets/img/all-images/about/about-img${i}.png" "backup-unused-images/all-images/about/"
done

echo ""
echo "🎭 Moving unused artists images..."
# Artists 2024 (keep: artists1-13.png, remove: artists14-23.png)
for i in {14..23}; do
    move_if_exists "public/assets/img/all-images/artists2024/artists${i}.png" "backup-unused-images/all-images/artists2024/"
done

echo ""
echo "📝 Moving unused blog images..."
# Blog images (keep: about-4.png, about-5.png, about-6.png)
move_if_exists "public/assets/img/all-images/blog/WhatsApp Image 2024-09-03 à 10.45.37_ce7bae01.jpg" "backup-unused-images/all-images/blog/"
for i in {1..8}; do
    for j in {1..4}; do
        move_if_exists "public/assets/img/all-images/blog/blog${i}_img${j}.png" "backup-unused-images/all-images/blog/"
    done
done

echo ""
echo "📞 Moving unused contact images..."
# Contact images (keep: contact-img7.png)
for i in {1..6}; do
    move_if_exists "public/assets/img/all-images/contact/contact-img${i}.png" "backup-unused-images/all-images/contact/"
done

echo ""
echo "📢 Moving unused CTA images..."
# CTA images (all unused)
move_if_exists "public/assets/img/all-images/cta/cta-img1.png" "backup-unused-images/all-images/cta/"

echo ""
echo "🎯 Moving unused demo images..."
# Demo images (all unused)
for i in {1..10}; do
    move_if_exists "public/assets/img/all-images/demo/demo-img${i}.png" "backup-unused-images/all-images/demo/"
done

echo ""
echo "🎪 Moving unused event images..."
# Event images (keep: event-img1.png, event-img2.png, event-img3.png)
for i in {4..26}; do
    move_if_exists "public/assets/img/all-images/event/event-img${i}.png" "backup-unused-images/all-images/event/"
done

echo ""
echo "🦶 Moving unused footer images..."
# Footer images (keep: Frame 49-54.png)
for i in {1..12}; do
    move_if_exists "public/assets/img/all-images/footer/footer-img${i}.png" "backup-unused-images/all-images/footer/"
done

echo ""
echo "🦸 Moving unused hero images..."
# Hero images (most are unused)
for i in {1..8}; do
    move_if_exists "public/assets/img/all-images/hero/hero-${i}.png" "backup-unused-images/all-images/hero/"
done
move_if_exists "public/assets/img/all-images/hero/hero-3.jpeg" "backup-unused-images/all-images/hero/"

for i in {1..15}; do
    move_if_exists "public/assets/img/all-images/hero/hero-img${i}.png" "backup-unused-images/all-images/hero/"
done
move_if_exists "public/assets/img/all-images/hero/R-removebg-preview.png" "backup-unused-images/all-images/hero/"

echo ""
echo "💭 Moving unused memory images..."
# Memory images (all unused)
for i in {1..15}; do
    move_if_exists "public/assets/img/all-images/memory/memory-img${i}.png" "backup-unused-images/all-images/memory/"
done

# Memory2024 images (most unused)
move_if_exists "public/assets/img/all-images/memory2024/m-1.png" "backup-unused-images/all-images/memory2024/"
move_if_exists "public/assets/img/all-images/memory2024/m-2.png" "backup-unused-images/all-images/memory2024/"
move_if_exists "public/assets/img/all-images/memory2024/m-3.png" "backup-unused-images/all-images/memory2024/"
move_if_exists "public/assets/img/all-images/memory2024/m-4.png" "backup-unused-images/all-images/memory2024/"
move_if_exists "public/assets/img/all-images/memory2024/m-11.png" "backup-unused-images/all-images/memory2024/"
move_if_exists "public/assets/img/all-images/memory2024/m-12.png" "backup-unused-images/all-images/memory2024/"
move_if_exists "public/assets/img/all-images/memory2024/m-14.png" "backup-unused-images/all-images/memory2024/"
move_if_exists "public/assets/img/all-images/memory2024/m-16.png" "backup-unused-images/all-images/memory2024/"
move_if_exists "public/assets/img/all-images/memory2024/m-17.jpg" "backup-unused-images/all-images/memory2024/"
move_if_exists "public/assets/img/all-images/memory2024/m-18.jpeg" "backup-unused-images/all-images/memory2024/"
move_if_exists "public/assets/img/all-images/memory2024/m-19.jpeg" "backup-unused-images/all-images/memory2024/"
move_if_exists "public/assets/img/all-images/memory2024/m-19.png" "backup-unused-images/all-images/memory2024/"
move_if_exists "public/assets/img/all-images/memory2024/m-20.jpg" "backup-unused-images/all-images/memory2024/"
move_if_exists "public/assets/img/all-images/memory2024/m-23.jpg" "backup-unused-images/all-images/memory2024/"

echo ""
echo "👥 Moving unused team images..."
# Team images (all unused)
for i in {1..44}; do
    move_if_exists "public/assets/img/all-images/team/team-img${i}.png" "backup-unused-images/all-images/team/"
done

echo ""
echo "💬 Moving unused testimonial images..."
# Testimonial images (all unused)
move_if_exists "public/assets/img/all-images/testimonials/testimonial-img1.png" "backup-unused-images/all-images/testimonials/"
move_if_exists "public/assets/img/all-images/testimonials/testimonial-img2.png" "backup-unused-images/all-images/testimonials/"

echo ""
echo "👤 Moving unused others images..."
# Others images (all unused)
move_if_exists "public/assets/img/all-images/others/author-img1.png" "backup-unused-images/all-images/others/"
move_if_exists "public/assets/img/all-images/others/author-img2.png" "backup-unused-images/all-images/others/"
for i in {1..4}; do
    move_if_exists "public/assets/img/all-images/others/vanue-img${i}.png" "backup-unused-images/all-images/others/"
done

echo ""
echo "🎨 Moving unused background images..."
# Background images (keep: bg18.jpg, hbg5.png)
bg_files=(
    "bg1.jpg" "bg2.jpg" "bg3.jpg" "bg4.jpg" "bg5.jpeg" "bg6.jpg" "bg7.jpg" 
    "bg8.jpeg" "bg9.jpeg" "bg10.jpeg" "bg11.jpeg" "bg12.jpeg" "bg13.jpeg" 
    "bg14.jpeg" "bg14.jpg" "bg15.jpeg" "bg16.jpg" "bg17.jpg" "bg18.jpeg" 
    "bg19.jpg" "bg20.jpeg" "bg21.jpeg" "bg22.jpeg"
    "body-bg1.png" "contact-bg1.png" "contact-bg2.png" "footer-bg1.png"
    "hbg1.png" "hbg2.png" "hbg3.png" "hbg4.png"
)

for file in "${bg_files[@]}"; do
    move_if_exists "public/assets/img/bg/$file" "backup-unused-images/bg/"
done

# Header bg files (most unused)
for i in {1..23}; do
    move_if_exists "public/assets/img/bg/header-bg${i}.png" "backup-unused-images/bg/"
done
move_if_exists "public/assets/img/bg/header-bg1-1.png" "backup-unused-images/bg/"

# Others bg files
move_if_exists "public/assets/img/bg/others-bg1.png" "backup-unused-images/bg/"
move_if_exists "public/assets/img/bg/others-bg2.png" "backup-unused-images/bg/"
move_if_exists "public/assets/img/bg/others-bg3.png" "backup-unused-images/bg/"
move_if_exists "public/assets/img/bg/popup-bg.png" "backup-unused-images/bg/"

echo ""
echo "🔧 Moving unused element images..."
# Element images (keep: elm3.png, elm5.png)
element_files=(
    "elements9.png" "elements10.png" "elements11.png" "elements12.png" "elements13.png"
    "elements14.png" "elements15.png" "elements16.png" "elements17.png" "elements18.png"
    "elements19.png" "elements20.png" "elements21.png" "elements22.png" "elements23.png"
    "elements24.png" "elements25.png" "elements26.png" "elements27.png" "elements28.png"
    "elements29.png" "elements30.png" "elements31.png" "elements32.png" "elements33.png"
    "elements34.png" "elements35.png" "elements36.png" "elements37.png" "elements38.png"
    "elements39.png" "elements40.png" "elements41.png"
    "elm1.png" "elm2.png" "elm4.png" "elm6.png" "layer1.png"
)

for file in "${element_files[@]}"; do
    move_if_exists "public/assets/img/elements/$file" "backup-unused-images/elements/"
done

echo ""
echo "🏷️  Moving unused icon images..."
# Icon images (keep only the ones actually used)
icon_files=(
    "about-icon1.svg" "about-icon2.svg" "arrow1.svg" "arrow2.svg"
    "calender2.svg" "check1.svg" "check2.svg" "check3.svg" "check4.svg" "check5.svg"
    "choose-icons1.svg" "choose1.svg" "clock2.svg" "comments1.svg"
    "location2.svg" "logo1.svg" "mail2.svg" "phn2.svg" "search1.svg" "share1.svg"
    "skills1.svg" "skills2.svg" "skills3.svg" "sub-logo1.svg" "sub-logo2.svg" "user1.svg"
)

for file in "${icon_files[@]}"; do
    move_if_exists "public/assets/img/icons/$file" "backup-unused-images/icons/"
done

echo ""
echo "📊 Cleanup Summary:"
echo "==================="
echo "Total files moved to backup: $moved_count"
echo ""
echo "✅ Cleanup completed successfully!"
echo "📁 All unused images have been moved to: backup-unused-images/"
echo ""
echo "ℹ️  What was kept (actively used in code):"
echo "   • Logos: logo-header-white.png, logo-footer-balck.png, logo-white-hover.png"
echo "   • Organizers: organizer-1.png through organizer-4.png"
echo "   • Sponsors: image_2.png through image_23.png"
echo "   • About: about-1.jpg, about-2.png, about-9.JPG, about-13.png, about-15.png"
echo "   • Artists: artists1.png through artists13.png"
echo "   • Blog: about-4.png, about-5.png, about-6.png"
echo "   • Contact: contact-img7.png"
echo "   • Events: event-img1.png, event-img2.png, event-img3.png"
echo "   • Footer: Frame 49.png through Frame 54.png"
echo "   • Memory2024: All numbered .jpeg files (01.jpeg through 63.jpeg)"
echo "   • Background: bg18.jpg, hbg5.png"
echo "   • Elements: elm3.png, elm5.png"
echo "   • Icons: calender1-black.svg, calender1.svg, clock1.svg, location1-black.svg,"
echo "            location1.svg, mail1.svg, phn1.svg, world1.svg, instagram.svg, tiktok.svg"
echo ""
echo "🔄 To restore any file, simply move it back from backup-unused-images/ to public/assets/img/"
echo "🗑️  To permanently delete the backup files, run: rm -rf backup-unused-images/"
