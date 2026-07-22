const fs = require('fs');

function getBlock(filename, startMarker, endMarker) {
    if (!fs.existsSync(filename)) return '';
    const html = fs.readFileSync(filename, 'utf8');
    const startIdx = html.indexOf(startMarker);
    if (startIdx === -1) return '';
    const endIdx = html.indexOf(endMarker, startIdx);
    if (endIdx === -1) return '';
    return html.substring(startIdx, endIdx + endMarker.length);
}

// 1. Get header from about.html (from start to before <!-- Hero Start --> or similar)
// Actually, index.html has a different Hero section. Let's see what about.html has.
let aboutHtml = fs.readFileSync('about.html', 'utf8');
let headerEnd = aboutHtml.indexOf('<!-- Navbar & Hero End -->');

// Let's check how the hero looks in about.html. It has a bg-dark hero.
// I will just read the current index.html's header because it's intact!
let currentIdxHtml = fs.readFileSync('index.html', 'utf8');
let heroEnd = currentIdxHtml.indexOf('<!-- Navbar & Hero End -->');
if (heroEnd === -1) heroEnd = currentIdxHtml.indexOf('<!-- Service Start -->');
if (heroEnd === -1) heroEnd = currentIdxHtml.indexOf('<!-- About Start -->');

let part1 = currentIdxHtml.substring(0, heroEnd + '<!-- Navbar & Hero End -->'.length);
// If it didn't find Navbar & Hero End, fallback
if (heroEnd === -1) {
    let serviceStartIdx = currentIdxHtml.indexOf('<!-- Service Start -->');
    part1 = currentIdxHtml.substring(0, serviceStartIdx);
}

// 2. Service Block from service.html
let serviceBlock = getBlock('service.html', '<!-- Service Start -->', '<!-- Service End -->');

// 3. About Block from about.html
let aboutBlock = getBlock('about.html', '<!-- About Start -->', '<!-- About End -->');

// 4. Menu Block from menu.html
let menuBlock = getBlock('menu.html', '<!-- Menu Start -->', '<!-- Menu End -->');

// 5. Reservation Block from booking.html
let reservationBlock = getBlock('booking.html', '<!-- Reservation Start -->', '<!-- Reservation End -->');

// 6. Team Block from team.html
let teamBlock = getBlock('team.html', '<!-- Team Start -->', '<!-- Team End -->');

// 7. Testimonial Block from testimonial.html
let testimonialBlock = getBlock('testimonial.html', '<!-- Testimonial Start -->', '<!-- Testimonial End -->');

// 8. Footer from about.html
let footerStart = aboutHtml.indexOf('<!-- Footer Start -->');
let footerEnd = aboutHtml.length;
let part8 = aboutHtml.substring(footerStart, footerEnd);

let newIndexHtml = part1 + '\n' +
    serviceBlock + '\n' +
    aboutBlock + '\n' +
    menuBlock + '\n' +
    reservationBlock + '\n' +
    teamBlock + '\n' +
    testimonialBlock + '\n' +
    part8;

fs.writeFileSync('index.html', newIndexHtml);
console.log('index.html rebuilt successfully! Size: ' + newIndexHtml.length);
