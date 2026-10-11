/* rootjavs — course catalogue and lesson content.
   Notes blocks: {h}, {p}, {ul}, {ol}, {tip}, {tbl}, {task}. Inline: **highlight**, [[Ctrl+C]] keycaps.
   Quiz: [question, [options], correctIndex]. */
window.RJ_COURSES = [
/* ============================ 1. COMPUTER FUNDAMENTALS ============================ */
{
 id:"computer-fundamentals", code:"CF", title:"Computer Fundamentals", cat:"Computer Basics", level:"Beginner", hours:6, icon:"laptop",
 short:"Understand how a computer works, identify every part of a laptop, and use Windows with confidence.",
 learn:["Identify every external part and port of a laptop","Understand CPU, RAM, storage and what the numbers mean","Start, shut down, sleep and restart the right way","Navigate Windows 11: desktop, taskbar, Start, Settings","Choose the right laptop for study, coding or office work","Care for battery, screen and keyboard"],
 lab:{type:"laptop", name:"Laptop Anatomy Lab", brief:"Identify parts and ports on an interactive laptop, then put the shutdown procedure in the correct order."},
 lessons:[
 {title:"What Is a Computer?", min:15, notes:[
  {p:"A computer is an electronic machine that takes **input**, **processes** it, **stores** it and gives **output**. Everything you will do on a computer, from typing a letter to hacking a test server, follows this simple cycle."},
  {h:"The IPOS cycle"},
  {tbl:[["Stage","What happens","Example"],["Input","You give data to the computer","Typing on the keyboard, clicking the mouse, speaking into the mic"],["Process","The CPU works on the data","Calculating a total in Excel"],["Output","The result is shown to you","Text on screen, sound from speakers, a printed page"],["Storage","The result is saved for later","Saving a file to the SSD or Google Drive"]]},
  {h:"Types of computers"},
  {ul:["**Desktop**: a separate CPU cabinet, monitor, keyboard and mouse. Powerful and easy to upgrade.","**Laptop**: everything in one portable body with a battery. The most common choice for students.","**Tablet and smartphone**: touch-based computers. Great for consuming content, limited for serious work.","**Server**: a powerful computer that serves websites, apps and data to many users over the internet."]},
  {h:"Hardware vs software"},
  {p:"**Hardware** is every part you can physically touch: screen, keyboard, CPU, RAM. **Software** is the set of instructions that tells hardware what to do: Windows, Chrome, MS Word. Hardware without software is a box of metal; software without hardware has nowhere to run."},
  {tip:"When someone says a computer is 'slow', the cause can be hardware (too little RAM, an old hard disk) or software (too many startup apps, malware). Knowing the difference is the first step to fixing it."},
  {task:["Look around you and list 5 input devices and 3 output devices.","Open any app and identify what is input, process, output and storage in that app.","Write down 5 pieces of software installed on your computer or phone."]}
 ], quiz:[
  ["Which stage of the IPOS cycle is a keyboard part of?",["Input","Process","Output","Storage"],0],
  ["Which part does the actual processing of data?",["Monitor","CPU","Speaker","Keyboard"],1],
  ["Which of these is software?",["RAM","Webcam","Google Chrome","Touchpad"],2],
  ["A computer that delivers websites to many users is called a:",["Tablet","Server","Laptop","Monitor"],1],
  ["Printing a document is an example of:",["Input","Storage","Output","Process"],2]
 ]},
 {title:"Parts of a Laptop", min:18, notes:[
  {p:"Before you use a laptop seriously, you should be able to name every visible part and every port. This saves you from plugging the wrong cable and helps you describe problems clearly."},
  {h:"External parts"},
  {tbl:[["Part","Purpose"],["Display (screen)","Shows everything. Usually 14 to 15.6 inches on student laptops."],["Webcam","Camera above the screen for video calls. Cover it when not in use for privacy."],["Keyboard","Typing and shortcuts. Some laptops have a separate number pad."],["Touchpad","Works like a mouse. One-finger tap = click, two-finger tap = right-click, two-finger swipe = scroll."],["Power button","Turns the laptop on. Often top-right of the keyboard, sometimes with a fingerprint reader."],["Speakers","Sound output. Usually beside or below the keyboard."],["Status lights","Show charging, power and caps lock status."]]},
  {h:"Ports and connectors"},
  {tbl:[["Port","Use"],["Charging port / DC-in","Connects the charger."],["USB-A","Rectangular port for pen drives, mouse, keyboard, phone cables."],["USB-C","Small oval port. Can carry data, display and charging on modern laptops."],["HDMI","Connects the laptop to a TV, monitor or projector."],["3.5 mm audio jack","Earphones or headphones with a microphone."],["SD card slot","Reads memory cards from cameras."],["Ethernet (RJ-45)","Wired internet. Found on some laptops."]]},
  {tip:"Never force a plug into a port. USB-A fits only one way up; if it does not go in, flip it. USB-C fits both ways."},
  {task:["Find every port on your laptop and write which side it is on.","Plug in a pen drive and find it in File Explorer under This PC.","Try a two-finger tap on the touchpad to open a right-click menu."]}
 ], quiz:[
  ["Which port connects a laptop to a projector?",["USB-A","HDMI","Audio jack","SD slot"],1],
  ["A two-finger tap on most touchpads does a:",["Left click","Right click","Shutdown","Screenshot"],1],
  ["Which port is small, oval and can also charge modern laptops?",["USB-C","HDMI","Ethernet","USB-A"],0],
  ["Why should you cover the webcam when not in use?",["To save battery","For privacy and security","To make it faster","It is required by Windows"],1],
  ["Wired internet uses which port?",["SD card","HDMI","Ethernet (RJ-45)","USB-C only"],2]
 ]},
 {title:"Inside the Computer: CPU, RAM and Storage", min:20, notes:[
  {p:"Three internal parts decide how fast and useful a computer is: the **processor**, the **memory (RAM)** and the **storage**. When you buy or compare computers, these are the numbers that matter."},
  {h:"Processor (CPU)"},
  {p:"The CPU is the brain. It follows instructions billions of times per second. Common families are **Intel Core i3 / i5 / i7 / i9** and **AMD Ryzen 3 / 5 / 7 / 9**. A higher number generally means more power. The newer generation also matters: a new i5 can beat an old i7."},
  {h:"RAM (memory)"},
  {p:"RAM is the working desk. Every open app and browser tab sits in RAM. More RAM lets you run more things at once without slowing down. RAM is **temporary**: it is cleared when the computer turns off."},
  {ul:["8 GB: fine for study, browsing and Office","16 GB: recommended for coding, virtual machines and cyber security labs","32 GB: heavy video editing and large virtual labs"]},
  {h:"Storage (SSD and HDD)"},
  {p:"Storage is the cupboard where files stay even when the power is off. An **SSD** has no moving parts and is 5 to 10 times faster than an old **HDD**. Always choose an SSD for your main drive."},
  {h:"Units of data"},
  {tbl:[["Unit","Size","Roughly holds"],["Bit","0 or 1","The smallest piece of data"],["Byte","8 bits","One character, like 'A'"],["KB","1,024 bytes","A short text file"],["MB","1,024 KB","A photo or a song"],["GB","1,024 MB","A movie or a game"],["TB","1,024 GB","Thousands of movies"]]},
  {h:"Other parts"},
  {ul:["**Motherboard**: the main circuit board that connects everything.","**GPU (graphics card)**: draws images; important for gaming, video editing and AI.","**Battery**: stores power; measured in Wh (watt-hours)."]},
  {task:["Open Settings > System > About and note your processor and installed RAM.","Open File Explorer > This PC and note your total and free storage.","Open Task Manager ([[Ctrl+Shift+Esc]]) > Performance and watch CPU and memory usage."]}
 ], quiz:[
  ["Which part is lost when the computer turns off?",["Data in RAM","Files on the SSD","Photos in Google Drive","The operating system"],0],
  ["Which storage is faster?",["HDD","SSD","CD","Floppy disk"],1],
  ["How many bits are in one byte?",["4","8","16","1024"],1],
  ["For cyber security labs and virtual machines, the recommended RAM is:",["2 GB","4 GB","16 GB","512 MB"],2],
  ["Which part is mainly responsible for graphics and AI work?",["GPU","Battery","Motherboard","Webcam"],0]
 ]},
 {title:"Using Windows 11", min:20, notes:[
  {p:"The **operating system (OS)** is the software that runs the whole computer and lets you use other apps. Most laptops in India come with **Windows 11**. Other operating systems are macOS, Linux and, on phones, Android and iOS."},
  {h:"The Windows screen"},
  {ul:["**Desktop**: the main background screen.","**Taskbar**: the bar at the bottom showing pinned and open apps.","**Start button**: the Windows logo. Opens apps, search and power options.","**System tray**: bottom-right; shows time, Wi-Fi, volume and battery.","**Notification and quick settings**: click Wi-Fi or battery icon to toggle Wi-Fi, Bluetooth and brightness."]},
  {h:"Turning on and off correctly"},
  {ol:["Press the power button for 1 to 2 seconds.","Wait for the Windows logo, then sign in with your PIN or password.","To shut down: save your work with [[Ctrl+S]], close apps, then Start > Power > **Shut down**.","Close the lid only after the screen is fully black."]},
  {tbl:[["Option","When to use it"],["Sleep","Short break. Work stays open, uses a little battery."],["Restart","After updates, or when the system feels slow or buggy."],["Shut down","End of the day, or when not using it for long."],["Force shutdown (hold power 10 s)","Only when the computer is frozen. Can damage unsaved files."]]},
  {h:"Settings you should know"},
  {ul:["Settings > Network & internet: connect to Wi-Fi.","Settings > System > Display: brightness and scale.","Settings > Bluetooth & devices: mouse, earbuds, printer.","Settings > Windows Update: keep the system secure.","Settings > Accounts > Sign-in options: set a PIN or fingerprint."]},
  {tip:"Windows Update is a security feature, not a nuisance. Most successful attacks use weaknesses that were already fixed in an update the victim never installed."},
  {task:["Pin your three most used apps to the taskbar.","Set a Windows Hello PIN under Sign-in options.","Check for updates and note the date of the last update.","Shut down correctly using Start > Power > Shut down."]}
 ], quiz:[
  ["Which of these is an operating system?",["MS Word","Windows 11","Chrome","Excel"],1],
  ["The bar at the bottom of the Windows screen is called the:",["Ribbon","Taskbar","Toolbar","Status bar"],1],
  ["When should you use force shutdown?",["Every night","Only when the computer is frozen","After every update","To save battery"],1],
  ["Where do you connect to Wi-Fi?",["Settings > Network & internet","Control Panel > Fonts","File Explorer > Downloads","Paint"],0],
  ["Why is Windows Update important?",["It changes the wallpaper","It fixes security weaknesses","It deletes old files","It increases screen size"],1]
 ]},
 {title:"Buying and Caring for a Laptop", min:15, notes:[
  {p:"A good laptop lasts 4 to 6 years if you buy the right configuration and take care of it. Most performance problems students face come from buying too little RAM or an HDD."},
  {h:"Buying guide for students"},
  {tbl:[["Use","Processor","RAM","Storage"],["Study, Office, browsing","Intel i3 / Ryzen 3 (recent generation)","8 GB","512 GB SSD"],["Coding, web development","Intel i5 / Ryzen 5","16 GB","512 GB SSD"],["Cyber security, virtual machines","Intel i5/i7 / Ryzen 5/7","16 GB or more","512 GB to 1 TB SSD"],["Video editing, AI","Intel i7 / Ryzen 7 + dedicated GPU","16 to 32 GB","1 TB SSD"]]},
  {tip:"Minimum rule: an SSD and at least 8 GB RAM. Check whether the RAM can be upgraded later; this extends the life of the laptop."},
  {h:"Battery care"},
  {ul:["Use the original or a certified charger.","Try to keep the battery between 20% and 80% for long life.","Avoid heat: do not use the laptop on a bed or pillow, it blocks the air vents.","Many laptops have a battery saver or charge-limit setting; turn it on if you are always plugged in."]},
  {h:"Daily care"},
  {ul:["Keep food and drinks away from the keyboard.","Clean the screen with a dry microfibre cloth; never spray liquid directly on it.","Carry the laptop in a padded bag; never lift it by the screen.","Restart at least once a week so updates can install."]},
  {task:["Write the specification of your current laptop and compare it with the table above.","Check if your laptop has a battery health or charge-limit option in its manufacturer app.","Clean your screen and keyboard safely."]}
 ], quiz:[
  ["What is the minimum recommended setup for a student laptop?",["4 GB RAM and HDD","8 GB RAM and SSD","2 GB RAM and SSD","16 GB RAM and HDD"],1],
  ["Using a laptop on a bed is bad because:",["It blocks air vents and heats the laptop","It drains the battery to zero","It deletes files","It is against the law"],0],
  ["For long battery life, try to keep charge between:",["0% and 10%","20% and 80%","90% and 100% always","It does not matter"],1],
  ["Best way to clean a laptop screen:",["Spray water on it","Dry microfibre cloth","Paper towel with sanitizer","Wet cotton"],1],
  ["For virtual machines in cyber security, recommended RAM is:",["4 GB","8 GB","16 GB or more","1 GB"],2]
 ]}
 ]
},
/* ============================ 2. FILE MANAGEMENT ============================ */
{
 id:"file-management", code:"FM", title:"File Management Essentials", cat:"Computer Basics", level:"Beginner", hours:3, icon:"folder",
 short:"Create, organise, move, copy, delete and recover files like a professional using File Explorer.",
 learn:["Navigate File Explorer and the main folders","Read file names and extensions safely","Create, rename, copy and move files and folders","Delete, restore and search for files","Organise coursework with a clean folder structure","Back up important files to the cloud"],
 lab:{type:"explorer", name:"File Explorer Simulator", brief:"A realistic File Explorer in your browser. Complete real file-management tasks; the lab checks your work automatically."},
 lessons:[
 {title:"Files, Folders and File Explorer", min:12, notes:[
  {p:"Everything on a computer is either a **file** (a document, photo, song, program) or a **folder** (a container for files and other folders). **File Explorer** is the app you use to manage both. Open it with [[Win+E]] or the yellow folder icon on the taskbar."},
  {h:"The main locations"},
  {tbl:[["Location","What goes here"],["Desktop","Items you need right now. Keep it clean."],["Documents","Assignments, resumes, notes."],["Downloads","Every file from the internet lands here first."],["Pictures / Videos / Music","Media files and screenshots."],["This PC","All drives: C: (Windows), D: (data), pen drives."],["Recycle Bin","Deleted items wait here before permanent removal."]]},
  {h:"Parts of the File Explorer window"},
  {ul:["**Navigation pane** on the left: quick links to folders and drives.","**Address bar** at the top: shows where you are. Click it to see the full path like C:\\Users\\Riya\\Documents.","**Search box** at the top right.","**Command bar**: New, Cut, Copy, Paste, Rename, Share, Delete, Sort, View."]},
  {task:["Open File Explorer with [[Win+E]].","Click the address bar in Documents and note the full path.","Change the view to Details and sort files by Date modified."]}
 ], quiz:[
  ["Shortcut to open File Explorer:",["Win+E","Win+D","Ctrl+E","Alt+F"],0],
  ["Where do internet downloads go by default?",["Documents","Desktop","Downloads","Pictures"],2],
  ["What is a folder?",["A program","A container for files and folders","A type of virus","A web page"],1],
  ["Where can you see the full path of the current folder?",["Taskbar","Address bar","Recycle Bin","Start menu"],1],
  ["The C: drive usually contains:",["Windows system files","Only photos","Only music","Nothing"],0]
 ]},
 {title:"File Names and Extensions", min:12, notes:[
  {p:"In **report.pdf**, \"report\" is the name and **.pdf** is the extension. The extension tells Windows which app opens the file, and it tells you what kind of file it really is."},
  {tbl:[["Extension","Type","Opens with"],[".docx",'Word document',"MS Word"],[".xlsx","Excel workbook","MS Excel"],[".pptx","PowerPoint presentation","MS PowerPoint"],[".pdf","PDF document","Browser, Acrobat"],[".jpg / .png","Image","Photos"],[".mp3 / .mp4","Audio / video","Media Player"],[".zip","Compressed folder","File Explorer"],[".txt","Plain text","Notepad"],[".exe / .msi","Program installer","Windows"]]},
  {h:"Show extensions"},
  {p:"Windows hides extensions by default. Turn them on: File Explorer > **View > Show > File name extensions**. Every professional keeps this on."},
  {tip:"Attackers send files like **invoice.pdf.exe**. With extensions hidden, it looks like a PDF, but it is a program. Never open .exe, .bat, .scr or .js files from emails or chats."},
  {h:"Naming rules"},
  {ul:["Windows does not allow these characters: \\ / : * ? \" < > |","Use clear names: **DBMS-Assignment-2-Riya.pdf** instead of new(3).pdf.","Use dates as YYYY-MM-DD so files sort correctly: 2026-10-11-minutes.docx."]},
  {task:["Turn on File name extensions.","Find three different file types on your computer and note their extensions.","Rename one messy file using the naming rules."]}
 ], quiz:[
  ["In 'marks.xlsx', the extension is:",["marks","xlsx",".xlsx","marks.xlsx"],2],
  ["Which file is most dangerous to open from an unknown email?",["photo.jpg","notes.txt","invoice.pdf.exe","song.mp3"],2],
  ["Which character is NOT allowed in a Windows file name?",["-","_","?","1"],2],
  ["A .pptx file opens in:",["Excel","PowerPoint","Notepad","Paint"],1],
  ["Best way to write a date in a file name for correct sorting:",["11-10-2026","2026-10-11","Oct 11","eleven October"],1]
 ]},
 {title:"Create, Rename, Copy and Move", min:15, notes:[
  {h:"Create a folder"},
  {p:"Right-click an empty area > New > Folder, or press [[Ctrl+Shift+N]]. Type the name and press Enter."},
  {h:"Rename"},
  {p:"Select the item and press [[F2]], type the new name, press Enter. Be careful not to change the extension."},
  {h:"Copy vs move"},
  {tbl:[["Action","Keys","Result"],["Copy","[[Ctrl+C]] then [[Ctrl+V]]","File exists in both places"],["Move (cut)","[[Ctrl+X]] then [[Ctrl+V]]","File leaves the old place"],["Drag on same drive","Mouse drag","Moves"],["Drag to another drive","Mouse drag","Copies"]]},
  {h:"Selecting many files"},
  {ul:["[[Ctrl+A]]: select everything in the folder.","[[Ctrl+Click]]: pick individual files.","[[Shift+Click]]: select a continuous range."]},
  {task:["Create a folder called Practice in Documents.","Copy one image into it, then move one PDF into it.","Rename a file with [[F2]]."]}
 ], quiz:[
  ["Shortcut to create a new folder:",["Ctrl+N","Ctrl+Shift+N","F2","Alt+N"],1],
  ["To move a file you use:",["Ctrl+C then Ctrl+V","Ctrl+X then Ctrl+V","Ctrl+Z","F5"],1],
  ["After copying, the file is:",["Only in the new place","In both places","Deleted","Hidden"],1],
  ["Key to rename a selected file:",["F1","F2","F5","Esc"],1],
  ["To select a continuous range of files, use:",["Ctrl+Click","Shift+Click","Alt+Click","Double-click"],1]
 ]},
 {title:"Delete, Restore and Search", min:12, notes:[
  {h:"Deleting"},
  {ul:["[[Delete]] sends the item to the **Recycle Bin**. You can still recover it.","[[Shift+Delete]] deletes permanently. Use it carefully.","Files deleted from a pen drive or network drive skip the Recycle Bin."]},
  {h:"Restoring"},
  {p:"Open the Recycle Bin, select the item and choose **Restore**. It goes back to its original folder."},
  {h:"Searching"},
  {ul:["Type in the File Explorer search box to search the current folder.","Use *.pdf to find all PDFs.","Search filters like **date:today** or **size:large** narrow results.","The Start menu search finds apps, settings and files."]},
  {tip:"Deleted files are not always gone. Data recovery tools can bring them back. Before selling a laptop, reset Windows with the 'Remove everything' and 'Clean data' options."},
  {task:["Delete a test file, then restore it from the Recycle Bin.","Search your Downloads folder for *.pdf.","Empty the Recycle Bin after checking nothing important is inside."]}
 ], quiz:[
  ["The Delete key sends a file to:",["Permanent deletion","Recycle Bin","Downloads","Desktop"],1],
  ["Shift+Delete does what?",["Deletes permanently","Renames","Copies","Restores"],0],
  ["Search pattern to find all PDF files:",["pdf*","*.pdf","#pdf","pdf?"],1],
  ["How do you recover a file from the Recycle Bin?",["Rename it","Select it and Restore","Press F5","You cannot"],1],
  ["Before selling a laptop you should:",["Just delete Documents","Reset with Remove everything + Clean data","Change wallpaper","Nothing"],1]
 ]},
 {title:"Organising and Backing Up", min:15, notes:[
  {p:"A clean structure saves hours every semester. Decide one structure and follow it everywhere."},
  {h:"A proven student structure"},
  {ul:["Documents > College > Semester-3 > DBMS > Assignments","Documents > Career > Resume, Certificates, Internship","Documents > Personal > ID copies, Bills (keep these private)"]},
  {h:"ZIP files"},
  {p:"Right-click files > **Compress to ZIP file** to send many files as one smaller file. Right-click a ZIP > **Extract All** to open it."},
  {h:"The 3-2-1 backup rule"},
  {ul:["Keep **3** copies of important data,","on **2** different types of storage (laptop + pen drive),","with **1** copy off-site (Google Drive, OneDrive)."]},
  {tip:"Ransomware encrypts files and demands money. A recent backup is the best defence. If you have a backup, you do not need to pay."},
  {task:["Create the College structure for your current semester.","Compress a folder into a ZIP and extract it again.","Upload your resume and certificates to Google Drive."]}
 ], quiz:[
  ["In the 3-2-1 rule, the '1' means:",["One USB","One copy off-site","One folder","One password"],1],
  ["To send many files as one smaller file you create a:",[".exe",".zip",".txt",".mp3"],1],
  ["The best defence against ransomware is:",["A new wallpaper","A recent backup","Deleting Downloads","Turning off Wi-Fi forever"],1],
  ["To open a ZIP file's content you:",["Rename it","Extract All","Delete it","Print it"],1],
  ["Which is a good folder path?",["Desktop > new folder (5)","Documents > College > Semester-3 > DBMS","Downloads > stuff","C: > Windows"],1]
 ]}
 ]
},
/* ============================ 3. TYPING MASTERY ============================ */
{
 id:"typing-mastery", code:"TM", title:"Typing Mastery", cat:"Computer Basics", level:"Beginner", hours:7, icon:"keyboard",
 short:"Learn touch typing with correct finger placement. Live speed and accuracy tracking in every lesson.",
 learn:["Sit and place your hands correctly","Master the home, top and bottom rows","Type numbers and symbols with Shift","Understand WPM and accuracy","Reach 25+ WPM with 90%+ accuracy","Follow a 7-day practice plan"],
 lab:{type:"typing", name:"Typing Trainer", brief:"Seven guided lessons with a colour-coded keyboard showing which finger to use. Practical exam: a timed 1-minute test."},
 lessons:[
 {title:"Posture and the Home Row", min:20, notes:[
  {p:"Touch typing means typing without looking at the keyboard, using all ten fingers. It feels slow for the first few days, then becomes much faster than two-finger typing."},
  {h:"Posture"},
  {ul:["Back straight, feet flat on the floor.","Screen at eye level, about an arm's length away.","Wrists slightly raised, not resting heavily on the laptop.","Eyes on the screen, not the keys."]},
  {h:"The home row"},
  {p:"Left fingers rest on [[A]] [[S]] [[D]] [[F]] and right fingers on [[J]] [[K]] [[L]] [[;]]. Thumbs rest on the space bar. The small bumps on [[F]] and [[J]] let you find the position without looking."},
  {tip:"Always return your fingers to the home row after pressing another key. This one habit is what makes touch typing work."},
  {task:["Complete Lesson 1 and Lesson 2 in the Typing Trainer.","Close your eyes, place your fingers on the home row using the bumps, then open your eyes and check."]}
 ], quiz:[
  ["Left-hand home row keys:",["QWER","ASDF","ZXCV","1234"],1],
  ["Why do F and J have small bumps?",["Decoration","To find the home row without looking","They are broken","For gaming"],1],
  ["Your thumbs rest on:",["Enter","Shift","Space bar","Backspace"],2],
  ["Touch typing means:",["Typing with one finger","Typing without looking at the keys","Typing on a touchscreen","Typing only numbers"],1],
  ["After pressing a key, fingers should:",["Stay there","Return to the home row","Rest on the touchpad","Leave the keyboard"],1]
 ]},
 {title:"Top and Bottom Rows", min:20, notes:[
  {h:"Finger map"},
  {tbl:[["Finger","Keys"],["Left little","Q A Z, 1, Tab, Caps Lock, Left Shift"],["Left ring","W S X, 2"],["Left middle","E D C, 3"],["Left index","R F V T G B, 4 5"],["Right index","Y H N U J M, 6 7"],["Right middle","I K , 8"],["Right ring","O L . 9"],["Right little","P ; / 0, Enter, Backspace, Right Shift"],["Thumbs","Space bar"]]},
  {p:"The index fingers do the most work: each covers two columns. Reach up or down from the home row, press, then return."},
  {task:["Complete Lessons 3 and 4 in the Typing Trainer.","Type the alphabet a to z three times without looking."]}
 ], quiz:[
  ["Which finger presses P?",["Right little","Right index","Left little","Thumb"],0],
  ["Which finger presses T?",["Left index","Left ring","Right index","Left little"],0],
  ["Which finger presses the comma?",["Right middle","Left middle","Right ring","Right little"],0],
  ["Which finger covers two columns on each hand?",["Little finger","Index finger","Ring finger","Thumb"],1],
  ["Which finger presses Enter?",["Right little","Right thumb","Left little","Right index"],0]
 ]},
 {title:"Numbers, Symbols and Shift", min:20, notes:[
  {p:"For capital letters and symbols, hold **Shift with the opposite hand**. To type a capital A (left hand), hold the **right** Shift. To type a capital J (right hand), hold the **left** Shift."},
  {ul:["Number row keys follow the same columns as the letters below them.","[[Shift+2]] gives @, used in every email address.","[[Shift+;]] gives :, used in time and code."]},
  {tip:"Caps Lock is for headings in capitals only. Do not use it for single capital letters; it slows you down."},
  {task:["Complete Lesson 5 and 6.","Type your email address and phone number 10 times without looking."]}
 ], quiz:[
  ["To type a capital A, hold:",["Left Shift","Right Shift","Caps Lock","Ctrl"],1],
  ["Shift+2 on most keyboards gives:",["#","@","!","$"],1],
  ["Caps Lock should be used for:",["Every capital letter","Headings fully in capitals","Numbers","Symbols"],1],
  ["Number keys are typed by:",["Only index fingers","Fingers in the same column","Thumbs","Any finger"],1],
  ["To type a capital J, hold:",["Left Shift","Right Shift","Alt","Tab"],0]
 ]},
 {title:"Speed, Accuracy and Practice", min:15, notes:[
  {h:"How speed is measured"},
  {ul:["**WPM (words per minute)**: in typing tests, 5 characters = 1 word.","**Accuracy**: percentage of keys pressed correctly.","Net speed falls quickly when accuracy drops, because you spend time correcting."]},
  {tbl:[["Level","Speed"],["Beginner","10 to 20 WPM"],["Good for students and office work","30 to 40 WPM"],["Professional typist","60+ WPM"],["Data entry job tests","Often 30 to 35 WPM"]]},
  {h:"7-day plan"},
  {ol:["Days 1-2: Lessons 1 and 2, 15 minutes each day.","Days 3-4: Lessons 3 and 4.","Days 5-6: Lessons 5 to 7.","Day 7: Practical exam. Target 25 WPM with 90% accuracy."]},
  {tip:"Accuracy first, speed second. Slow down until you reach 95% accuracy; speed will follow on its own."},
  {task:["Take the public Typing Test and save your first score.","Practise for 7 days and take it again. Compare the results."]}
 ], quiz:[
  ["In typing tests, one word equals:",["3 characters","5 characters","10 characters","1 character"],1],
  ["What should you improve first?",["Speed","Accuracy","Volume","Font"],1],
  ["A good speed for office work is:",["5 WPM","30-40 WPM","200 WPM","1 WPM"],1],
  ["WPM stands for:",["Words Per Minute","Write Per Minute","Words Per Mail","Windows Per Minute"],0],
  ["Why does low accuracy reduce speed?",["Time is lost fixing mistakes","The keyboard slows down","Windows blocks you","It does not"],0]
 ]}
 ]
},
/* ============================ 4. KEYBOARD SHORTCUTS ============================ */
{
 id:"keyboard-shortcuts", code:"KS", title:"Keyboard Shortcuts for Productivity", cat:"Computer Basics", level:"Beginner", hours:2, icon:"command",
 short:"Work twice as fast without the mouse. Essential Windows, browser and editing shortcuts with a live trainer.",
 learn:["Use the 12 essential shortcuts in every app","Control Windows: lock, switch, snap, screenshot","Browse faster with tab and address-bar shortcuts","Edit text quickly with word and line jumps","Recover closed tabs and undo mistakes","Build security habits like Win+L"],
 lab:{type:"shortcuts", name:"Shortcut Trainer", brief:"The trainer asks for an action and checks the keys you press. Practical exam: 10 prompts, 8 correct to pass."},
 lessons:[
 {title:"How Shortcuts Work and the Essential 12", min:12, notes:[
  {p:"A shortcut is a key combination that performs an action instantly. Hold the first key (usually [[Ctrl]]), tap the second key once, then release both."},
  {tbl:[["Shortcut","Action"],["[[Ctrl+C]]","Copy"],["[[Ctrl+X]]","Cut"],["[[Ctrl+V]]","Paste"],["[[Ctrl+Z]]","Undo"],["[[Ctrl+Y]]","Redo"],["[[Ctrl+A]]","Select all"],["[[Ctrl+S]]","Save"],["[[Ctrl+F]]","Find"],["[[Ctrl+P]]","Print"],["[[Ctrl+B]]","Bold"],["[[Ctrl+I]]","Italic"],["[[Ctrl+U]]","Underline"]]},
  {tip:"On a Mac, use the Command key instead of Ctrl for almost all of these."},
  {task:["For one full day, copy and paste only with the keyboard.","Press [[Ctrl+S]] every few minutes while working on any document."]}
 ], quiz:[
  ["Undo is:",["Ctrl+Y","Ctrl+Z","Ctrl+U","Ctrl+X"],1],
  ["Select all is:",["Ctrl+S","Ctrl+A","Ctrl+E","Ctrl+L"],1],
  ["Find on a page is:",["Ctrl+F","Ctrl+H","Ctrl+G","Ctrl+D"],0],
  ["Ctrl+U makes text:",["Uppercase","Underlined","Unbold","Undone"],1],
  ["To use a shortcut you:",["Press both keys one after another slowly","Hold the first key, tap the second","Press only the second key","Double-click"],1]
 ]},
 {title:"Windows Shortcuts", min:12, notes:[
  {tbl:[["Shortcut","Action"],["[[Win]]","Open Start"],["[[Win+D]]","Show desktop"],["[[Win+E]]","File Explorer"],["[[Win+L]]","Lock the computer"],["[[Alt+Tab]]","Switch windows"],["[[Alt+F4]]","Close window"],["[[Win+Shift+S]]","Screenshot of a selected area"],["[[Win+V]]","Clipboard history"],["[[Win+.]]","Emoji panel"],["[[Win+Left]] / [[Win+Right]]","Snap window to half screen"],["[[Ctrl+Shift+Esc]]","Task Manager"]]},
  {tip:"[[Win+L]] is the most important security shortcut. Lock your laptop every time you step away, even for a minute."},
  {task:["Snap two windows side by side with [[Win+Left]] and [[Win+Right]].","Take a screenshot with [[Win+Shift+S]] and paste it into a document.","Turn on clipboard history with [[Win+V]]."]}
 ], quiz:[
  ["Lock the computer:",["Alt+F4","Win+L","Ctrl+L","Win+D"],1],
  ["Screenshot of a selected area:",["Win+Shift+S","Ctrl+P","Alt+Tab","Win+E"],0],
  ["Open Task Manager directly:",["Ctrl+Shift+Esc","Ctrl+Esc","Alt+Esc","Win+T"],0],
  ["Switch between open windows:",["Alt+Tab","Ctrl+B","Shift+Tab","Win+L"],0],
  ["Snap a window to the left half:",["Win+Left","Ctrl+Left","Alt+Left","Shift+Left"],0]
 ]},
 {title:"Browser Shortcuts", min:10, notes:[
  {tbl:[["Shortcut","Action"],["[[Ctrl+T]]","New tab"],["[[Ctrl+W]]","Close tab"],["[[Ctrl+Shift+T]]","Reopen closed tab"],["[[Ctrl+Tab]]","Next tab"],["[[Ctrl+1]] to [[Ctrl+8]]","Jump to tab 1 to 8"],["[[Ctrl+L]]","Go to the address bar"],["[[Ctrl+R]]","Reload"],["[[Ctrl+Shift+N]]","Incognito window"],["[[Ctrl+D]]","Bookmark page"],["[[Ctrl+H]]","History"],["[[Ctrl+J]]","Downloads"]]},
  {tip:"Incognito does not make you anonymous. It only stops your own browser from saving history. Your school, ISP and websites can still see your activity."},
  {task:["Close a tab and bring it back with [[Ctrl+Shift+T]].","Use [[Ctrl+L]] to type a new address without touching the mouse."]}
 ], quiz:[
  ["Reopen a closed tab:",["Ctrl+T","Ctrl+W","Ctrl+Shift+T","Ctrl+R"],2],
  ["Jump to the address bar:",["Ctrl+L","Ctrl+A","Ctrl+B","Ctrl+K"],0],
  ["Open downloads in Chrome:",["Ctrl+J","Ctrl+D","Ctrl+H","Ctrl+O"],0],
  ["Incognito mode:",["Makes you fully anonymous","Only stops your browser saving history","Blocks all ads","Speeds up internet"],1],
  ["Close the current tab:",["Ctrl+W","Ctrl+Q","Alt+T","Ctrl+X"],0]
 ]},
 {title:"Text Editing Shortcuts", min:10, notes:[
  {tbl:[["Shortcut","Action"],["[[Ctrl+Backspace]]","Delete the previous word"],["[[Ctrl+Left]] / [[Ctrl+Right]]","Jump one word"],["[[Home]] / [[End]]","Start / end of line"],["[[Ctrl+Home]] / [[Ctrl+End]]","Start / end of document"],["[[Shift+Arrow]]","Select character by character"],["[[Ctrl+Shift+Arrow]]","Select word by word"]]},
  {task:["Write a paragraph, then fix three words using only [[Ctrl+Left]], [[Ctrl+Backspace]] and typing.","Select a whole line with [[Home]] then [[Shift+End]]."]}
 ], quiz:[
  ["Delete the previous whole word:",["Ctrl+Backspace","Shift+Delete","Alt+Backspace","Ctrl+D"],0],
  ["Go to the end of the line:",["End","Home","PgDn","Ctrl+E"],0],
  ["Go to the start of a document:",["Ctrl+Home","Home","Ctrl+Up","Alt+Home"],0],
  ["Select word by word:",["Ctrl+Shift+Arrow","Alt+Arrow","Shift+Tab","Ctrl+Tab"],0],
  ["Jump one word to the right:",["Ctrl+Right","Shift+Right","Alt+Right","Win+Right"],0]
 ]}
 ]
},
/* ============================ 5. MS WORD ============================ */
{
 id:"ms-word", code:"WD", title:"MS Word: Basic to Advanced", cat:"Office", level:"Beginner to Advanced", hours:9, icon:"doc",
 short:"Create professional resumes, letters and reports. Formatting, tables, styles, table of contents and review tools.",
 learn:["Navigate the ribbon and save in the right format","Format text and paragraphs professionally","Insert tables and images and control layout","Use styles, headers, footers and a table of contents","Build a resume and formal letters","Use review tools, mail merge and export to PDF"],
 lab:{type:"word", name:"Document Editor Lab", brief:"A Word-style editor in your browser. Build a real resume; the lab checks headings, lists, tables and formatting. Download as a Word file."},
 lessons:[
 {title:"Getting Started with Word", min:18, notes:[
  {p:"MS Word is the most used document software in offices, colleges and government. Free alternatives work the same way: **Google Docs** and **LibreOffice Writer**."},
  {h:"The Word window"},
  {ul:["**Ribbon**: the toolbar at the top, organised into tabs: Home, Insert, Design, Layout, References, Review, View.","**Quick Access Toolbar**: Save, Undo, Redo, always visible.","**Document area**: the page where you type.","**Status bar**: page number, word count, zoom."]},
  {h:"Save in the right format"},
  {tbl:[["Format","When to use"],[".docx","Normal editable Word file"],[".pdf","Final version to submit or email. Looks the same on every device."],[".dotx","Template you will reuse"],[".txt","Plain text, no formatting"]]},
  {tip:"Turn on AutoSave by saving to OneDrive, or press [[Ctrl+S]] often. A power cut can wipe hours of work."},
  {task:["Create a new blank document and save it as Practice-Word.docx in Documents.","Find the word count in the status bar.","Save a copy as PDF with File > Save As > PDF."]}
 ], quiz:[
  ["The toolbar with Home, Insert and Layout tabs is called:",["Taskbar","Ribbon","Status bar","Menu bar"],1],
  ["Best format to submit a final document:",[".txt",".pdf",".exe",".zip"],1],
  ["Normal editable Word format is:",[".docx",".xlsx",".pptx",".png"],0],
  ["Word count is shown in the:",["Ribbon","Status bar","Title bar","Recycle Bin"],1],
  ["A free alternative to MS Word:",["Google Docs","Photoshop","VLC","Chrome"],0]
 ]},
 {title:"Formatting Text and Paragraphs", min:22, notes:[
  {h:"Character formatting"},
  {tbl:[["Action","Shortcut"],["Bold","[[Ctrl+B]]"],["Italic","[[Ctrl+I]]"],["Underline","[[Ctrl+U]]"],["Increase / decrease font size","[[Ctrl+Shift+>]] / [[Ctrl+Shift+<]]"],["Change case","[[Shift+F3]]"],["Clear formatting","[[Ctrl+Space]]"]]},
  {h:"Paragraph formatting"},
  {tbl:[["Alignment","Shortcut","Use"],["Left","[[Ctrl+L]]","Normal body text"],["Center","[[Ctrl+E]]","Titles, headings"],["Right","[[Ctrl+R]]","Dates in letters"],["Justify","[[Ctrl+J]]","Reports, newspapers"]]},
  {ul:["**Line spacing**: 1.15 or 1.5 is comfortable for reading.","**Bullets** for items without order; **numbering** for steps.","**Format Painter** (paintbrush icon) copies formatting from one place to another."]},
  {tip:"Professional rule: use at most two fonts in one document, for example Calibri for body and Cambria for headings."},
  {task:["Type a short paragraph about yourself and justify it.","Create a bulleted list of 5 skills and a numbered list of 3 steps.","Use Format Painter to copy a heading's style to another line."]}
 ], quiz:[
  ["Center align shortcut:",["Ctrl+C","Ctrl+E","Ctrl+L","Ctrl+M"],1],
  ["For steps in order you use:",["Bullets","Numbering","Bold","Underline"],1],
  ["Which tool copies formatting?",["Format Painter","Eraser","Spell check","Zoom"],0],
  ["Justify alignment shortcut:",["Ctrl+J","Ctrl+U","Ctrl+R","Ctrl+K"],0],
  ["How many fonts should a professional document normally use?",["1 to 2","5","10","As many as possible"],0]
 ]},
 {title:"Tables, Images and Page Layout", min:22, notes:[
  {h:"Tables"},
  {ul:["Insert > Table and drag to choose rows and columns.","Press [[Tab]] in the last cell to add a new row.","Layout tab: merge cells, split cells, insert rows above/below.","Table Design tab: apply a ready-made style."]},
  {h:"Images"},
  {ul:["Insert > Pictures.","Wrap Text controls how text flows around the image: In Line, Square, Tight, Behind, In Front.","Hold [[Shift]] while resizing from a corner to keep proportions."]},
  {h:"Page layout"},
  {tbl:[["Setting","Where","Typical value"],["Margins","Layout > Margins","Normal (2.54 cm)"],["Orientation","Layout > Orientation","Portrait; Landscape for wide tables"],["Size","Layout > Size","A4 in India"],["Page break","Insert > Page Break or [[Ctrl+Enter]]","Start the next chapter on a new page"]]},
  {task:["Insert a 3 x 4 table with a timetable and apply a table style.","Insert an image and set Wrap Text to Square.","Insert a page break with [[Ctrl+Enter]]."]}
 ], quiz:[
  ["Add a new table row from the last cell with:",["Enter","Tab","Shift","Esc"],1],
  ["Standard paper size in India:",["Letter","A4","Legal","A3"],1],
  ["Page break shortcut:",["Ctrl+Enter","Shift+Enter","Alt+Enter","Ctrl+B"],0],
  ["To keep image proportions while resizing, hold:",["Ctrl","Alt","Shift","Tab"],2],
  ["Which option controls how text flows around an image?",["Wrap Text","Page Color","Watermark","Margins"],0]
 ]},
 {title:"Styles, Headers, Footers and Table of Contents", min:25, notes:[
  {p:"**Styles** are the secret of professional documents. Instead of formatting each heading by hand, apply **Heading 1**, **Heading 2** and **Normal**. Change a style once and every heading updates."},
  {h:"Headers, footers and page numbers"},
  {ul:["Insert > Header / Footer: text that repeats on every page, like your name or the report title.","Insert > Page Number: choose bottom of page, centre.","Different First Page: hides the header on the cover page."]},
  {h:"Automatic table of contents"},
  {ol:["Apply Heading 1 and Heading 2 styles to all headings.","Place the cursor where the contents should go.","References > Table of Contents > Automatic Table.","After edits, right-click the table > Update Field > Update entire table."]},
  {tip:"Your project report or dissertation should always use styles and an automatic table of contents. It is what examiners expect."},
  {task:["Apply Heading 1 and Heading 2 to a 3-page practice document.","Insert page numbers at the bottom centre.","Generate an automatic table of contents and update it after adding a heading."]}
 ], quiz:[
  ["An automatic table of contents is built from:",["Bold text","Heading styles","Images","Tables"],1],
  ["Text that repeats at the top of every page is the:",["Footer","Header","Footnote","Title"],1],
  ["Where do you insert a table of contents?",["Insert tab","References tab","View tab","Design tab"],1],
  ["After changing headings you must:",["Retype the contents","Update the table","Delete the file","Nothing"],1],
  ["Why use styles?",["Change all headings at once and enable a TOC","They add colour only","They are required to save","They reduce file size"],0]
 ]},
 {title:"Professional Documents, Review and Mail Merge", min:25, notes:[
  {h:"Resume structure"},
  {ol:["Name and contact (phone, email, LinkedIn, GitHub)","Professional summary (2 to 3 lines)","Skills","Education","Projects and internships","Certifications and achievements"]},
  {tip:"Keep a fresher resume to one page, save it as PDF, and name it Firstname-Lastname-Resume.pdf."},
  {h:"Formal letter structure"},
  {ul:["Sender address and date","Receiver name and address","Subject line","Salutation (Respected Sir/Madam)","Body: reason, details, request","Closing (Yours sincerely) and name"]},
  {h:"Review tools"},
  {ul:["**Spelling and Grammar**: [[F7]].","**Track Changes**: Review > Track Changes shows every edit for your guide or manager.","**Comments**: Review > New Comment.","**Find and Replace**: [[Ctrl+H]]."]},
  {h:"Mail merge"},
  {p:"Mail merge creates many personalised letters or certificates from one template and an Excel list. Mailings > Start Mail Merge > Letters, select recipients from Excel, insert merge fields like Name, then Finish & Merge."},
  {task:["Build your one-page resume in the lab or in Word and export it to PDF.","Write a leave application in formal letter format.","Turn on Track Changes, edit a paragraph, then accept all changes."]}
 ], quiz:[
  ["Spelling and grammar check key:",["F2","F5","F7","F12"],2],
  ["To show every edit to a reviewer, turn on:",["Track Changes","Format Painter","Page Color","Zoom"],0],
  ["Mail merge combines a template with:",["A list of recipients","A video","A ZIP file","An image"],0],
  ["Find and Replace shortcut:",["Ctrl+F","Ctrl+H","Ctrl+R","Ctrl+G"],1],
  ["A fresher resume should normally be:",["One page","Five pages","Ten pages","Handwritten"],0]
 ]}
 ]
},
/* ============================ 6. MS EXCEL ============================ */
{
 id:"ms-excel", code:"XL", title:"MS Excel: Basic to Advanced", cat:"Office", level:"Beginner to Advanced", hours:12, icon:"sheet",
 short:"From your first cell to lookups, logic, charts and pivot tables. Build real marksheets and budgets with live formulas.",
 learn:["Work with workbooks, sheets, cells and ranges","Write formulas with SUM, AVERAGE, MIN, MAX, COUNT","Use IF, COUNTIF, SUMIF and text functions","Look up data with VLOOKUP, XLOOKUP and INDEX-MATCH","Sort, filter, validate and conditionally format data","Summarise with charts and pivot tables"],
 lab:{type:"excel", name:"Spreadsheet Lab", brief:"A working spreadsheet with a formula engine. Build a marksheet using SUM, AVERAGE, MAX and IF. Download as a real .xlsx file."},
 lessons:[
 {title:"Excel Basics", min:20, notes:[
  {p:"Excel organises data in a grid. A file is a **workbook**; each tab is a **worksheet**; each box is a **cell** named by its column letter and row number, like **B3**. A group of cells is a **range**, like **A1:D10**."},
  {h:"Entering and editing"},
  {ul:["Type and press Enter to move down, Tab to move right.","Press [[F2]] to edit a cell without retyping it.","Text aligns left, numbers align right by default.","**AutoFill**: drag the small square at the bottom-right of a cell to continue a series (1, 2, 3 or Mon, Tue, Wed)."]},
  {h:"Useful navigation"},
  {tbl:[["Keys","Action"],["[[Ctrl+Arrow]]","Jump to the edge of data"],["[[Ctrl+Home]]","Go to A1"],["[[Ctrl+Space]]","Select column"],["[[Shift+Space]]","Select row"],["[[Ctrl+;]]","Insert today's date"]]},
  {task:["Create a sheet with Name, Roll No, Maths, Science, English for 5 students.","Use AutoFill to number roll numbers 1 to 5.","Rename the sheet tab to Marks."]}
 ], quiz:[
  ["A single box in Excel is a:",["Row","Cell","Sheet","Range"],1],
  ["The cell in column C, row 5 is named:",["5C","C5","R5C3","CC5"],1],
  ["Edit a cell without retyping:",["F2","F4","F7","F9"],0],
  ["A1:D10 is called a:",["Cell","Range","Sheet","Workbook"],1],
  ["Drag the fill handle to:",["Delete cells","Continue a series","Print","Zoom"],1]
 ]},
 {title:"Formulas and Basic Functions", min:25, notes:[
  {p:"Every formula starts with **=**. Use cell references instead of typing numbers, so results update automatically when data changes."},
  {tbl:[["Formula","Meaning"],["=B2+C2","Add two cells"],["=B2*C2","Multiply"],["=SUM(B2:D2)","Total of a range"],["=AVERAGE(B2:B6)","Average"],["=MIN(B2:B6) / =MAX(B2:B6)","Smallest / largest"],["=COUNT(B2:B6)","How many numbers"],["=ROUND(E2,1)","Round to 1 decimal"]]},
  {h:"Relative and absolute references"},
  {p:"When you copy =B2*C2 down, it becomes =B3*C3: that is a **relative** reference. To keep a cell fixed, add dollar signs: **$B$10**. Press [[F4]] while typing to add them."},
  {tip:"Order of operations follows BODMAS: =2+3*4 gives 14, not 20. Use brackets: =(2+3)*4."},
  {task:["Add a Total column using SUM for every student.","Add an Average row using AVERAGE.","Find the highest Maths marks with MAX."]}
 ], quiz:[
  ["Every formula starts with:",["+","=","#","@"],1],
  ["Total of B2 to D2:",["=TOTAL(B2:D2)","=SUM(B2:D2)","=ADD(B2-D2)","=B2:D2"],1],
  ["To make a reference absolute you add:",["#","$","%","&"],1],
  ["Key that toggles absolute references:",["F2","F4","F9","F12"],1],
  ["=2+3*4 equals:",["20","14","24","9"],1]
 ]},
 {title:"Logic and Text Functions", min:25, notes:[
  {h:"IF"},
  {p:"=IF(condition, value_if_true, value_if_false). Example: **=IF(E2>=40,\"Pass\",\"Fail\")**."},
  {tbl:[["Function","Example","Result"],["COUNTIF","=COUNTIF(F2:F50,\"Pass\")","How many passed"],["SUMIF","=SUMIF(A2:A50,\"Food\",B2:B50)","Total spent on Food"],["AND / OR","=IF(AND(B2>=40,C2>=40),\"Pass\",\"Fail\")","Pass only if both"],["CONCAT","=CONCAT(A2,\" \",B2)","Join first and last name"],["UPPER / LOWER / PROPER","=PROPER(A2)","riya shah becomes Riya Shah"],["LEN","=LEN(A2)","Number of characters"],["TRIM","=TRIM(A2)","Remove extra spaces"]]},
  {h:"Nested IF for grades"},
  {p:"=IF(E2>=75,\"A\",IF(E2>=60,\"B\",IF(E2>=40,\"C\",\"F\")))"},
  {task:["Add a Result column with IF (Pass at 120 total or more).","Count passes with COUNTIF.","Create a Grade column with nested IF."]}
 ], quiz:[
  ["=IF(B2>=40,\"Pass\",\"Fail\") shows Fail when B2 is:",["50","40","39","100"],2],
  ["Count cells matching a condition:",["COUNT","COUNTIF","SUM","LEN"],1],
  ["Join text from cells:",["CONCAT","SPLIT","MERGE","JOIN()"],0],
  ["Remove extra spaces:",["CLEAN","TRIM","CUT","SPACE"],1],
  ["SUMIF adds values that:",["Are text","Match a condition","Are negative","Are blank"],1]
 ]},
 {title:"Lookup Functions", min:25, notes:[
  {p:"Lookups find a value in one table and bring back related information, like finding a student's marks by roll number or a product's price by code."},
  {h:"VLOOKUP"},
  {p:"**=VLOOKUP(lookup_value, table, column_number, FALSE)**. Example: =VLOOKUP(H2,A2:E50,5,FALSE) finds roll number H2 in column A and returns column 5. Always use FALSE for an exact match."},
  {h:"XLOOKUP (Excel 2021 / 365)"},
  {p:"**=XLOOKUP(H2,A2:A50,E2:E50,\"Not found\")**. Simpler and more flexible: it can look left, and it lets you set a message when nothing is found."},
  {h:"INDEX + MATCH"},
  {p:"=INDEX(E2:E50, MATCH(H2, A2:A50, 0)) works in every Excel version and can look in any direction."},
  {tip:"#N/A means the value was not found. Check for extra spaces with TRIM, or numbers stored as text."},
  {task:["Create a roll-number search box that shows a student's total using VLOOKUP.","Repeat it with XLOOKUP (or INDEX-MATCH if you have older Excel)."]}
 ], quiz:[
  ["For an exact VLOOKUP match the last argument is:",["TRUE","FALSE","1","EXACT"],1],
  ["#N/A in a lookup means:",["Value not found","Divide by zero","Wrong function name","Too many arguments"],0],
  ["Which lookup can easily look to the left?",["VLOOKUP","XLOOKUP","HLOOKUP","SUM"],1],
  ["MATCH(H2,A2:A50,0) returns:",["The value","The position","The sum","An error always"],1],
  ["The third argument of VLOOKUP is:",["Column number to return","Row number","Sheet name","Match type"],0]
 ]},
 {title:"Data Tools, Charts and Pivot Tables", min:30, notes:[
  {h:"Organising data"},
  {ul:["**Sort**: Data > Sort; sort by Total, largest to smallest.","**Filter**: [[Ctrl+Shift+L]] adds drop-down filters to headers.","**Freeze panes**: View > Freeze Top Row keeps headers visible.","**Format as Table**: [[Ctrl+T]] gives banding, filters and auto-expanding formulas."]},
  {h:"Conditional formatting and validation"},
  {ul:["Home > Conditional Formatting > Highlight Cells Rules > Less Than 40 in red.","Data bars and colour scales show patterns instantly.","Data > Data Validation restricts input, for example marks between 0 and 100, or a drop-down list."]},
  {h:"Charts"},
  {tbl:[["Chart","Best for"],["Column / Bar","Comparing categories"],["Line","Trends over time"],["Pie","Parts of a whole (max 5-6 parts)"],["Scatter","Relationship between two numbers"]]},
  {h:"Pivot tables"},
  {p:"Insert > PivotTable summarises thousands of rows in seconds. Drag fields into **Rows**, **Columns** and **Values**: for example, total sales by Region and Month."},
  {task:["Sort the marksheet by Total and filter only Pass students.","Highlight marks below 40 in red.","Create a column chart of student totals.","Build a pivot table showing average marks by class."]}
 ], quiz:[
  ["Add filters to headers:",["Ctrl+Shift+L","Ctrl+F","Ctrl+T only","Alt+F"],0],
  ["Best chart for a trend over months:",["Pie","Line","Scatter","Doughnut"],1],
  ["Restrict marks to 0-100 with:",["Data Validation","Freeze Panes","Sort","Merge"],0],
  ["A pivot table is used to:",["Summarise large data","Draw images","Write letters","Send email"],0],
  ["Keep the header row visible while scrolling:",["Freeze Top Row","Hide","Group","Protect"],0]
 ]}
 ]
},
/* ============================ 7. MS POWERPOINT ============================ */
{
 id:"ms-powerpoint", code:"PP", title:"MS PowerPoint: Basic to Advanced", cat:"Office", level:"Beginner to Advanced", hours:6, icon:"slides",
 short:"Design clean, persuasive presentations and deliver them with confidence. Build a full deck in the browser and export .pptx.",
 learn:["Create slides with the right layouts","Apply themes, fonts and the 6x6 rule","Use images, shapes, SmartArt, charts and tables","Add animations and transitions with restraint","Use Slide Master for consistent branding","Present with Presenter View and speaker notes"],
 lab:{type:"ppt", name:"Slide Builder Lab", brief:"Build a real presentation with layouts, themes and speaker notes. The lab checks your deck; download it as a PowerPoint file."},
 lessons:[
 {title:"PowerPoint Basics", min:18, notes:[
  {p:"A presentation is a set of **slides**. Each slide uses a **layout** that decides where the title, text and pictures go. Free alternatives: **Google Slides** and **Canva**."},
  {tbl:[["Layout","Use"],["Title Slide","First slide: topic, your name, date"],["Title and Content","Most slides: heading + bullets or picture"],["Section Header","Divides parts of a long talk"],["Two Content","Comparison, before/after"],["Blank","Full-screen images"]]},
  {h:"Essential actions"},
  {ul:["New slide: [[Ctrl+M]].","Duplicate slide: [[Ctrl+D]].","Start slideshow: [[F5]]; from the current slide: [[Shift+F5]].","Views: Normal for editing, Slide Sorter for rearranging."]},
  {task:["Create a 5-slide deck about yourself with a Title Slide and Title and Content slides.","Rearrange slides in Slide Sorter view.","Play it with [[F5]]."]}
 ], quiz:[
  ["New slide shortcut:",["Ctrl+N","Ctrl+M","Ctrl+S","F5"],1],
  ["Start the slideshow from the beginning:",["F5","F7","Shift+F5","Ctrl+P"],0],
  ["The first slide usually uses:",["Blank","Title Slide","Two Content","Section Header"],1],
  ["Which view is best to rearrange slides?",["Slide Sorter","Reading","Notes","Outline only"],0],
  ["A free alternative to PowerPoint:",["Google Slides","Excel","Notepad","Paint"],0]
 ]},
 {title:"Designing Professional Slides", min:22, notes:[
  {h:"Design rules"},
  {ul:["**One idea per slide.**","**6x6 rule**: no more than 6 bullets, about 6 words each.","Font size: titles 32 to 44 pt, body at least 20 pt.","High contrast: dark text on light background or the reverse.","Use one theme and at most two fonts for the whole deck."]},
  {h:"Images"},
  {ul:["Use high-quality images; avoid stretched or blurry pictures.","Free image sites: Unsplash, Pexels. Icons: Insert > Icons.","Crop to focus, and align images using Smart Guides."]},
  {tip:"Your slides support you; they are not your script. If the audience is reading long paragraphs, they are not listening to you."},
  {task:["Apply one theme to your deck from the Design tab.","Rewrite any slide that breaks the 6x6 rule.","Add one full-quality image and crop it."]}
 ], quiz:[
  ["The 6x6 rule limits:",["Slides to 6","Bullets to about 6 with about 6 words each","Fonts to 6","Images to 6"],1],
  ["Minimum body text size for readability:",["8 pt","12 pt","20 pt","72 pt"],2],
  ["How many ideas should a slide carry?",["One","Five","Ten","As many as fit"],0],
  ["Where do you apply a theme?",["Design tab","Review tab","View tab","File tab"],0],
  ["Good free image source:",["Unsplash","Random Google image","Screenshot of a movie","Someone's Instagram"],0]
 ]},
 {title:"Shapes, SmartArt, Charts and Tables", min:20, notes:[
  {ul:["**Shapes**: Insert > Shapes. Hold [[Shift]] for perfect circles and squares.","**SmartArt**: Insert > SmartArt turns bullet points into process, cycle or hierarchy diagrams.","**Charts**: Insert > Chart opens a small Excel sheet for the data.","**Tables**: keep them small; highlight the important row."]},
  {h:"Alignment"},
  {p:"Select objects > Shape Format > Align > Align Middle / Distribute Horizontally. Alignment is the difference between amateur and professional slides."},
  {task:["Convert a bulleted list into a SmartArt process diagram.","Insert a column chart with your semester marks.","Align three shapes and distribute them evenly."]}
 ], quiz:[
  ["Turn bullets into a diagram with:",["SmartArt","WordArt","Clip Art","Header"],0],
  ["Hold this key to draw a perfect circle:",["Ctrl","Shift","Alt","Tab"],1],
  ["Charts in PowerPoint get their data from:",["A small Excel sheet","Notepad","The internet","Paint"],0],
  ["To space shapes evenly use:",["Distribute","Group","Crop","Rotate"],0],
  ["What makes slides look professional?",["Consistent alignment","Many fonts","Lots of text","Random colours"],0]
 ]},
 {title:"Animations, Transitions and Slide Master", min:20, notes:[
  {h:"Transitions vs animations"},
  {tbl:[["Feature","Applies to","Advice"],["Transition","Movement between slides","Use one subtle transition like Fade for all slides"],["Animation","Objects inside a slide","Use Appear or Fade to reveal points one by one"]]},
  {ul:["Animations > Animation Pane shows the order and timing.","Morph transition creates smooth movement between two similar slides.","Avoid spinning, bouncing and sounds in professional talks."]},
  {h:"Slide Master"},
  {p:"View > Slide Master controls the design of every slide: logo, fonts, colours, footer. Put your college or company logo here once and it appears on every slide."},
  {task:["Apply Fade to all slides.","Animate bullet points to appear one by one.","Add a logo to the Slide Master."]}
 ], quiz:[
  ["Movement between slides is a:",["Transition","Animation","Theme","Layout"],0],
  ["Put a logo on every slide using:",["Slide Master","Header","Notes","Comments"],0],
  ["Professional choice of transition:",["Subtle Fade","Spin with sound","Random effects","Bounce"],0],
  ["Where can you change animation order?",["Animation Pane","Slide Sorter","File menu","Design Ideas"],0],
  ["Morph creates:",["Smooth movement between similar slides","Sound","A chart","A table"],0]
 ]},
 {title:"Presenting Like a Professional", min:20, notes:[
  {h:"Structure of a strong presentation"},
  {ol:["Hook: a question, fact or story.","Problem: why this matters.","Solution / content: 3 key points.","Proof: data, demo, example.","Summary and call to action.","Questions."]},
  {h:"Tools for presenting"},
  {ul:["**Speaker notes**: write what you will say below each slide.","**Presenter View**: you see notes and the next slide; the audience sees only the slide.","[[B]] blacks the screen, [[W]] whites it; press again to return.","Export: File > Export > PDF for sharing, or Save as Video."]},
  {tip:"Rehearse aloud at least three times with a timer. Speak to the audience, not to the screen."},
  {task:["Write speaker notes for every slide of your deck.","Rehearse with Presenter View and time yourself.","Export the deck to PDF."]}
 ], quiz:[
  ["Where do you write what you will say?",["Speaker notes","Slide title","Footer","Comments"],0],
  ["Presenter View shows you:",["Notes and the next slide","Only the audience","Nothing","Excel data"],0],
  ["Press this to black the screen during a slideshow:",["B","W","K","Esc"],0],
  ["A good presentation starts with:",["A hook","The thank-you slide","A long paragraph","References"],0],
  ["How many times should you rehearse at minimum?",["Never","Once silently","Three times aloud","Ten times silently"],2]
 ]}
 ]
}
];

window.RJ_SOON = [
 {title:"Web Development", cat:"Development", icon:"code", short:"HTML, CSS, JavaScript, Git and hosting your own website."},
 {title:"Python Programming", cat:"Development", icon:"code", short:"Logic, data types, functions and automation scripts."},
 {title:"Linux Essentials", cat:"Systems", icon:"terminal", short:"Terminal, file system, permissions, processes and Bash."},
 {title:"Networking Fundamentals", cat:"Systems", icon:"network", short:"IP, DNS, ports, protocols and network tools."},
 {title:"Cyber Security Foundations", cat:"Cyber Security", icon:"shield", short:"Threats, cryptography, OWASP Top 10 and ethical hacking."},
 {title:"Cloud Basics (AWS)", cat:"Cloud", icon:"cloud", short:"Deploy and secure apps on the cloud."},
 {title:"AI for Everyone", cat:"AI", icon:"spark", short:"Prompting, automation and building a simple chatbot."},
 {title:"AI Security", cat:"AI", icon:"shield", short:"Prompt injection, data leakage and securing AI apps."}
];
