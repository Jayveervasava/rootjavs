/* rootjavs — resources: cheat sheets, glossary, interview questions, roadmaps, FAQ */
window.RJ_CHEATS = [
 {id:"windows-shortcuts", title:"Windows 11 Shortcuts", cat:"Windows", icon:"windows", desc:"The 30 shortcuts that make you twice as fast on Windows.",
  sections:[["General",[["Win","Open Start"],["Win+D","Show desktop"],["Win+E","File Explorer"],["Win+I","Settings"],["Win+L","Lock PC"],["Win+V","Clipboard history"],["Win+.","Emoji panel"],["Win+Shift+S","Screenshot (area)"],["PrtScn","Full screenshot"]]],
   ["Windows",[["Alt+Tab","Switch apps"],["Alt+F4","Close app"],["Win+Left/Right","Snap to half"],["Win+Up","Maximise"],["Win+Down","Minimise/restore"],["Win+Tab","Task view"],["Win+Ctrl+D","New virtual desktop"]]],
   ["System",[["Ctrl+Shift+Esc","Task Manager"],["Win+X","Power user menu"],["Win+R","Run dialog"],["Win+P","Projector / display mode"],["Win+K","Cast to screen"],["Win+H","Voice typing"]]]]},
 {id:"browser-shortcuts", title:"Chrome & Browser Shortcuts", cat:"Browser", icon:"globe", desc:"Tabs, address bar, history and developer tools.",
  sections:[["Tabs",[["Ctrl+T","New tab"],["Ctrl+W","Close tab"],["Ctrl+Shift+T","Reopen closed tab"],["Ctrl+Tab","Next tab"],["Ctrl+Shift+Tab","Previous tab"],["Ctrl+1..8","Go to tab 1-8"],["Ctrl+9","Last tab"]]],
   ["Page",[["Ctrl+L","Address bar"],["Ctrl+R / F5","Reload"],["Ctrl+F","Find on page"],["Ctrl+D","Bookmark"],["Ctrl+Plus / Minus","Zoom in / out"],["Ctrl+0","Reset zoom"]]],
   ["Browser",[["Ctrl+H","History"],["Ctrl+J","Downloads"],["Ctrl+Shift+N","Incognito window"],["Ctrl+Shift+Delete","Clear browsing data"],["F12","Developer tools"]]]]},
 {id:"word-shortcuts", title:"MS Word Shortcuts", cat:"Office", icon:"doc", desc:"Formatting, navigation and review shortcuts for Word.",
  sections:[["Formatting",[["Ctrl+B / I / U","Bold / Italic / Underline"],["Ctrl+E","Center"],["Ctrl+L / R / J","Left / Right / Justify"],["Ctrl+Shift+> / <","Font bigger / smaller"],["Shift+F3","Change case"],["Ctrl+Space","Clear character formatting"],["Ctrl+Shift+C / V","Copy / paste formatting"]]],
   ["Document",[["Ctrl+Enter","Page break"],["Ctrl+Home / End","Start / end of document"],["Ctrl+H","Find and replace"],["Ctrl+K","Insert link"],["F7","Spelling and grammar"],["F12","Save as"]]],
   ["Styles",[["Ctrl+Alt+1","Heading 1"],["Ctrl+Alt+2","Heading 2"],["Ctrl+Shift+N","Normal style"],["Ctrl+Shift+L","Bullet list"]]]]},
 {id:"excel-formulas", title:"Excel Formulas & Shortcuts", cat:"Office", icon:"sheet", desc:"The formulas used in 90% of real office spreadsheets.",
  sections:[["Basic",[["=SUM(A1:A10)","Total"],["=AVERAGE(A1:A10)","Average"],["=MIN / MAX(range)","Smallest / largest"],["=COUNT(range)","Count numbers"],["=COUNTA(range)","Count non-empty"],["=ROUND(A1,2)","Round to 2 decimals"]]],
   ["Logic",[["=IF(A1>=40,\"Pass\",\"Fail\")","Condition"],["=COUNTIF(range,\"Pass\")","Count matches"],["=SUMIF(range,\"Food\",sum_range)","Conditional total"],["=AND(a,b) / =OR(a,b)","Combine conditions"],["=IFERROR(x,\"-\")","Hide errors"]]],
   ["Lookup & Text",[["=VLOOKUP(v,table,col,FALSE)","Exact lookup"],["=XLOOKUP(v,look,ret)","Modern lookup"],["=INDEX(r,MATCH(v,l,0))","Flexible lookup"],["=CONCAT(A1,\" \",B1)","Join text"],["=TRIM / PROPER / UPPER","Clean text"],["=TODAY()","Today's date"]]],
   ["Keys",[["F2","Edit cell"],["F4","Absolute reference $A$1"],["Ctrl+T","Format as table"],["Ctrl+Shift+L","Filters"],["Alt+=","AutoSum"],["Ctrl+;","Insert date"]]]]},
 {id:"powerpoint-shortcuts", title:"PowerPoint Shortcuts & Design Rules", cat:"Office", icon:"slides", desc:"Build and present faster, plus the rules for clean slides.",
  sections:[["Build",[["Ctrl+M","New slide"],["Ctrl+D","Duplicate"],["Ctrl+G","Group objects"],["Ctrl+Shift+G","Ungroup"],["Shift+drag","Keep proportions"],["Alt+F9","Show guides"]]],
   ["Present",[["F5","Start from beginning"],["Shift+F5","Start from current slide"],["B / W","Black / white screen"],["Number+Enter","Jump to slide"],["Esc","End show"]]],
   ["Design rules",[["1 idea","Per slide"],["6x6","Max 6 bullets, ~6 words"],["20 pt+","Minimum body text"],["2 fonts","Maximum per deck"],["High contrast","Dark on light or light on dark"]]]]},
 {id:"file-extensions", title:"File Extensions Guide", cat:"Windows", icon:"folder", desc:"Know what every common file type is, and which ones are risky.",
  sections:[["Documents",[[".docx","Word"],[".xlsx","Excel"],[".pptx","PowerPoint"],[".pdf","PDF document"],[".txt","Plain text"],[".csv","Comma-separated data"]]],
   ["Media",[[".jpg / .png","Image"],[".gif","Animated image"],[".mp3","Audio"],[".mp4","Video"],[".svg","Vector image"]]],
   ["Risky if from unknown sources",[[".exe / .msi","Program installer"],[".bat / .cmd","Script"],[".js / .vbs","Script"],[".scr","Screensaver (often malware)"],[".apk","Android app"],[".docm / .xlsm","Office file with macros"]]]]},
 {id:"typing-fingers", title:"Touch Typing Finger Chart", cat:"Typing", icon:"keyboard", desc:"Which finger presses which key, plus posture and practice targets.",
  sections:[["Left hand",[["Little","Q A Z 1, Tab, Caps, Shift"],["Ring","W S X 2"],["Middle","E D C 3"],["Index","R F V T G B 4 5"]]],
   ["Right hand",[["Index","Y H N U J M 6 7"],["Middle","I K , 8"],["Ring","O L . 9"],["Little","P ; / 0, Enter, Backspace, Shift"],["Thumbs","Space bar"]]],
   ["Targets",[["Week 1","15-20 WPM, 95% accuracy"],["Month 1","30 WPM"],["Office ready","35-40 WPM"],["Professional","60+ WPM"]]]]},
 {id:"computer-parts", title:"Computer Parts & Buying Guide", cat:"Hardware", icon:"cpu", desc:"Every part explained, with the right specs for your budget.",
  sections:[["Core parts",[["CPU","Brain: Intel i3/i5/i7, Ryzen 3/5/7"],["RAM","Working memory: 8 GB min, 16 GB ideal"],["SSD","Fast storage: 512 GB recommended"],["GPU","Graphics, video, AI"],["Motherboard","Connects all parts"]]],
   ["Ports",[["USB-A","Pen drives, mouse"],["USB-C","Data, display, charging"],["HDMI","TV / projector"],["3.5 mm","Headphones"],["RJ-45","Wired internet"]]],
   ["Buy for",[["Study / Office","i3/Ryzen 3, 8 GB, 512 GB SSD"],["Coding","i5/Ryzen 5, 16 GB, 512 GB SSD"],["Cyber security","i5-i7/Ryzen 5-7, 16 GB+, 1 TB SSD"]]]]}
];

window.RJ_GLOSSARY = [
 ["Antivirus","Software that detects and removes malicious programs."],["App","Short for application; a program that does a task, like Word or Chrome."],["Backup","A copy of data kept safe in case the original is lost."],["Bandwidth","How much data a connection can carry per second."],["Bit","The smallest unit of data: 0 or 1."],["Bluetooth","Short-range wireless connection for earbuds, mice and phones."],["Browser","An app for viewing websites, such as Chrome, Edge or Firefox."],["Byte","8 bits; roughly one character of text."],["Cache","Temporary stored data that makes things load faster."],["Cloud","Storage and computing provided over the internet, like Google Drive."],["Cookie","A small file a website stores in your browser to remember you."],["CPU","Central Processing Unit; the brain of the computer."],["Cursor","The blinking line or pointer showing where you are typing or pointing."],["Cyber security","Protecting computers, networks and data from attacks."],["Database","An organised collection of data, usually managed with SQL."],["Desktop","The main Windows screen, or a non-portable computer."],["DNS","The system that turns website names into IP addresses."],["Domain","A website's name, like rootjavs.in."],["Download","Copying a file from the internet to your device."],["Driver","Software that lets Windows talk to a hardware device."],["Encryption","Scrambling data so only someone with the key can read it."],["Extension","The letters after the dot in a file name, like .pdf."],["File","A single item of stored data: a document, photo or program."],["Firewall","A filter that blocks unwanted network traffic."],["Folder","A container that holds files and other folders."],["Formula","An Excel calculation that starts with =."],["GB","Gigabyte; about one billion bytes."],["GPU","Graphics Processing Unit; draws images and speeds up AI."],["Hardware","The physical parts of a computer."],["HTML","The language used to structure web pages."],["HTTPS","Secure, encrypted version of HTTP shown by the padlock."],["IP address","A unique number that identifies a device on a network."],["Malware","Any software designed to harm, such as viruses and ransomware."],["MFA","Multi-factor authentication; a second proof of identity like an OTP."],["Operating system","Software that runs the computer, like Windows or Linux."],["Password manager","An app that stores strong, unique passwords securely."],["Patch","An update that fixes bugs or security holes."],["Phishing","Fake messages that trick you into giving passwords or money."],["Pivot table","An Excel tool that summarises large data quickly."],["Port","A physical socket on a device, or a numbered network endpoint."],["RAM","Random Access Memory; temporary working memory."],["Ransomware","Malware that locks your files and demands payment."],["Resolution","Number of pixels on a screen, like 1920 x 1080."],["Ribbon","The tabbed toolbar at the top of Office apps."],["Router","A device that connects your home network to the internet."],["Server","A computer that provides data or services to other computers."],["Shortcut","A key combination that performs an action quickly."],["Slide Master","PowerPoint view that controls the design of every slide."],["Software","Programs and instructions that run on hardware."],["SSD","Solid State Drive; fast storage with no moving parts."],["Style","A saved set of formatting in Word, like Heading 1."],["Taskbar","The bar at the bottom of the Windows screen."],["TB","Terabyte; about 1,000 GB."],["Upload","Sending a file from your device to the internet."],["URL","A web address, like https://rootjavs.in/courses."],["USB","Universal Serial Bus; standard port for devices."],["VPN","Virtual Private Network; an encrypted tunnel for internet traffic."],["Wi-Fi","Wireless network connection."],["WPM","Words per minute; a measure of typing speed."],["ZIP","A compressed file that holds many files in one."]
];

window.RJ_INTERVIEW = [
 {cat:"Computer Basics", qs:[
  ["What is the difference between RAM and ROM?","RAM is temporary, read-write working memory that is cleared on shutdown. ROM is permanent, mostly read-only memory that stores firmware such as the BIOS/UEFI used to start the computer."],
  ["What is the difference between an SSD and an HDD?","An HDD stores data on spinning magnetic disks with a moving head. An SSD uses flash memory with no moving parts, so it is much faster, quieter, more shock-resistant and uses less power."],
  ["What is an operating system? Give examples.","Software that manages hardware and provides services to other programs: memory, files, processes and devices. Examples: Windows 11, macOS, Ubuntu Linux, Android, iOS."],
  ["What happens when you turn on a computer?","Power-on self-test (POST) checks hardware, firmware (BIOS/UEFI) finds the boot drive, the bootloader loads the operating system kernel, drivers and services start, and finally the login screen appears."],
  ["What is the difference between 32-bit and 64-bit?","A 64-bit processor and OS can address far more memory (more than 4 GB of RAM) and process larger chunks of data per instruction. Modern systems are 64-bit."]]},
 {cat:"MS Office", qs:[
  ["What is the difference between VLOOKUP and XLOOKUP?","VLOOKUP only searches the first column of a range and returns a value to the right by column number. XLOOKUP takes separate lookup and return ranges, can look left, defaults to exact match and allows a custom 'not found' value."],
  ["What is a pivot table used for?","To summarise and analyse large datasets quickly by dragging fields into rows, columns, values and filters, for example total sales by region and month."],
  ["What is the difference between relative and absolute references?","A relative reference (A1) changes when a formula is copied. An absolute reference ($A$1) stays fixed. Mixed references ($A1 or A$1) fix only the column or the row."],
  ["How do you create an automatic table of contents in Word?","Apply Heading 1/2/3 styles to headings, then References > Table of Contents. Update it after changes with Update Field."],
  ["What is mail merge?","A Word feature that combines a template with a data list, usually from Excel, to produce personalised letters, labels, emails or certificates in bulk."],
  ["What is Slide Master in PowerPoint?","The master template that controls layouts, fonts, colours and repeated elements like logos across all slides in a presentation."]]},
 {cat:"Networking", qs:[
  ["What is an IP address?","A numerical label that identifies a device on a network. IPv4 looks like 192.168.1.10; IPv6 is longer, like 2001:db8::1."],
  ["What does DNS do?","It translates human-readable domain names like google.com into IP addresses that computers use to connect."],
  ["What is the difference between HTTP and HTTPS?","HTTPS is HTTP over TLS encryption. It protects data in transit from eavesdropping and tampering and verifies the website's identity with a certificate."],
  ["What is the difference between a router and a switch?","A switch connects devices within the same local network. A router connects different networks together, such as your home network to the internet."],
  ["Name some common ports.","HTTP 80, HTTPS 443, SSH 22, FTP 21, DNS 53, SMTP 25, RDP 3389."]]},
 {cat:"Cyber Security Basics", qs:[
  ["What is the CIA triad?","Confidentiality (only authorised people can see data), Integrity (data is not altered without authorisation) and Availability (systems and data are accessible when needed)."],
  ["What is phishing and how do you spot it?","A social-engineering attack using fake messages to steal credentials or money. Signs: urgency, unexpected attachments, mismatched sender domains, spelling errors, links whose real address differs from the text."],
  ["What is the difference between a virus, a worm and ransomware?","A virus attaches to files and spreads when they run. A worm spreads by itself across networks. Ransomware encrypts data and demands payment for the key."],
  ["What is multi-factor authentication?","Requiring two or more proofs of identity from different categories: something you know (password), something you have (phone/OTP), something you are (fingerprint)."],
  ["What is the difference between encryption and hashing?","Encryption is reversible with a key and protects confidentiality. Hashing is one-way, produces a fixed-length digest and is used to verify integrity and store passwords."],
  ["What is a firewall?","A system that monitors and filters incoming and outgoing network traffic according to security rules."]]}
];

window.RJ_ROADMAPS = [
 {id:"office", title:"Office Professional", icon:"doc", time:"6-8 weeks", desc:"For students and job seekers who need strong computer and Office skills for any office role.",
  steps:[["Computer Fundamentals","live","computer-fundamentals"],["File Management Essentials","live","file-management"],["Typing Mastery (35 WPM)","live","typing-mastery"],["Keyboard Shortcuts","live","keyboard-shortcuts"],["MS Word","live","ms-word"],["MS Excel","live","ms-excel"],["MS PowerPoint","live","ms-powerpoint"],["Career: resume and interview prep","soon"]]},
 {id:"webdev", title:"Web Developer", icon:"code", time:"6-9 months", desc:"Build and deploy websites and web apps from scratch.",
  steps:[["Computer Fundamentals","live","computer-fundamentals"],["Typing Mastery","live","typing-mastery"],["HTML and CSS","soon"],["JavaScript","soon"],["Git and GitHub","soon"],["Databases and SQL","soon"],["Backend basics","soon"],["Hosting and Cloud","soon"],["Web security (OWASP)","soon"]]},
 {id:"soc", title:"SOC Analyst (Blue Team)", icon:"shield", time:"9-12 months", desc:"Monitor, detect and respond to attacks. The most hired entry-level cyber security role.",
  steps:[["Computer Fundamentals","live","computer-fundamentals"],["Keyboard Shortcuts","live","keyboard-shortcuts"],["Linux Essentials","soon"],["Networking Fundamentals","soon"],["Cyber Security Foundations","soon"],["Log analysis and SIEM","soon"],["Incident response","soon"],["Certifications: Security+, CySA+","soon"]]},
 {id:"hacker", title:"Ethical Hacker (Red Team)", icon:"terminal", time:"12-18 months", desc:"Find vulnerabilities before criminals do, legally and responsibly.",
  steps:[["Computer Fundamentals","live","computer-fundamentals"],["Typing Mastery","live","typing-mastery"],["Linux Essentials","soon"],["Networking Fundamentals","soon"],["Python Programming","soon"],["Web Development basics","soon"],["Cyber Security Foundations","soon"],["Web app hacking and bug bounty","soon"],["Certifications: CEH, OSCP","soon"]]}
];

window.RJ_FAQ = [
 ["Is rootjavs free?","Yes. All live courses, notes, labs, exams and cheat sheets are free to use."],
 ["Do I need to install anything?","No. Every lab runs inside your browser. For the best experience use Chrome or Edge on a laptop or desktop."],
 ["How are courses structured?","Each course has lessons. Every lesson has notes with a PDF download, a quiz and a real task to do on your own computer. Each course has a hands-on lab, a final theory exam and a practical exam."],
 ["How do I get a certificate?","Pass all lesson quizzes, then the final theory exam (60% or more) and the practical exam. Your certificate is generated instantly with a unique ID that can be verified."],
 ["Can I download the files I make in the labs?","Yes. Documents download as Word files, spreadsheets as .xlsx and presentations as .pptx, so you can open them in Microsoft Office or Google tools."],
 ["Where is my progress saved?","On this version, progress is saved in your browser on this device. Signing in keeps your name on your certificates. Cloud sync arrives with the full launch."],
 ["I am a complete beginner. Where should I start?","Start with Computer Fundamentals, then follow the Office Professional roadmap."],
 ["Will there be cyber security courses?","Yes. Linux, Networking, Cyber Security Foundations, Cloud and AI Security are on the roadmap."]
];
