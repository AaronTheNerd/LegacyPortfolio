import { Project } from './project';

export const PERSONAL_PROJECTS: Project[] = [
    {
        title: 'Discord Bot',
        course: '',
        date: 'September - October 2021',
        language: 'Python',
        src_link: 'https://github.com/AaronTheNerd/DiscordBot',
        keywords: 'Discord, Bot, Coroutines, Youtube-dl, User Feedback',
        description: 'A simple bot I created for a Discord server my friends use. This is designed to be a simplified version of the discontinued Rythm bot with some extra commands as requested by users. These are the cogs and commands which are currently implemented: <ul><li><span class="text-success">Youtube Cog</span>, many of the users in the server would use the Rythm bot to listen to music while in a voice channel. Once the Rythm bot was discontinued, it became my job to attempt to recreate as much of the functionality of the Rythm bot as possible. To start, a skeleton music bot was found on vbe0201\'s GitHub. Once this was found, much work was put in to modifying the source code, fixing a variety of bugs as well as adding much functionality. For example, the <code>pause</code> and <code>resume</code> commands needed to be fixed. Additionally, a <code>playlist</code> command was added to queue entire playlists at a time instead of just individual songs. Also, a <code>loopqueue</code> command was added so the queue could be looped indefinitely.</li><li><span class="text-success">DnD Cog</span>, a few users in the server play D&D through Discord and thought it would be helpful to have some commands for rolling dice in a text channel. To do this, a <code>roll</code> command was designed which would take one required argument and one optional argument. The required argument would be the number of faces on the dice and the optional argument would be how many times the dice should be rolled. Once this command was implemented a variety of commands were made to shortcut the dice rolling command, each invoking the original <code>roll</code> command. There is a command for each dice used in D&D: <code>d4</code>, <code>d6</code>, <code>d8</code>, <code>d10</code>, <code>d12</code>, <code>d20</code>, and <code>d100</code>.</li><li><span class="text-success">Event Cog</span>, one of the admins of the server thought it would be funny to have an extremely rare event occur when a command is executed. The idea is to have a 1 in 10,000 chance for the bot to insult the user in old English, then quickly delete the message after sending.</li><li><span class="text-success">Misc Cog</span>, with a previous bot, one of the admins had access to a command which would send a random fact. To implement this, a third-party, Python module, <code>randfacts</code>, is used to get and send a random fact to the user.</li></ul>',
        images: [],
        side_video: {
            source: '',
            type: ''
        },
        videos: []
    },
    {
        title: 'Sorting Algorithm Visualizer',
        course: '',
        date: 'August 2021',
        language: 'C++',
        src_link: 'https://github.com/AaronTheNerd/SortingAlgorithmVisualizer',
        keywords: 'GTK, Multithreading',
        description: 'A simple sorting algorithm visualizer in C++. This project utilizes the GTK C++ interface `gtkmm` to display a visualization of sorting algorithms. This project consists of two threads, one which sorts the list and another which displays the current state of the list. The latter thread will wait for the former thread to draw the current state of the list before continuing, thus enforcing a specific framerate for the visualizer. Currently, the following sorts are implemented: <ul><li>Bubble Sort</li><li>Cocktail Shaker Sort</li><li>Selection Sort</li><li>Merge Sort</li><li>Insertion Sort</li><li>Quick Sort</li><li>Shell Sort</li></ul>Additionally, the visualizer shows which indicies are currently being compared/swapped by giving them a specific color. Also, the visualizer shows some statistics for the current algorithm i.e. the size of the list being sorted, the number of comparisons, and the number of swaps.',
        images: [],
        side_video: {
            source: '',
            type: ''
        },
        videos: [
            {
                source: 'assets/sorter.m4v',
                type: 'video/mp4'
            }
        ]
    },
    {
        title: 'Seamless Triangular Gif Generator',
        course: '',
        date: 'May - July 2021',
        language: 'Python',
        src_link: 'https://github.com/AaronTheNerd/DynamicBackgrounds',
        keywords: 'OpenSimplex, PIL, ImageMagick, Delaunay Triangulation, Gif',
        description: 'Designed a program which uses Delaunay Triangulation to create seamless, looping gifs. In order to move the points, I used 4-dimensional OpenSimplex noise where two out of the four components are the starting x- and y-position of the point and the other two move in a circle. This means that each point will move uniquely to each other and will always end where they started. On top of this, I added an additional type of point which can ‘drift’ i.e. some points will always move through an entire screen distance before the gif loops. This allows for more varied motion between the points. To finalize the program I designed many different ways to color the triangles, from a simple gradient, or a tie dye swirl, or a facing ratio based shader. These different ways of coloring the triangles allows for a large amount of customization all while being controlled by modifying a single json file. Below is one of my favorites; a facing ratio shader on top of an HSV gradient, where all of the points drift one screen width to the right and one screen height down.',
        images: [
            {
                source: 'assets/gif8.gif',
                alt: 'Dynamic Background Gif'
            },
        ],
        side_video: {
            source: '',
            type: ''
        },
        videos: []
    },
    {
        title: 'Unsigned Arbitrary Precision Integer',
        course: '',
        date: 'November 2020 - July 2021',
        language: 'C++',
        src_link: 'https://github.com/AaronTheNerd/uInteger',
        keywords: 'Performance Testing, Unit Testing, Optimization',
        description: 'Implementation of an arbitrary precision unsigned integer. This project is a direct improvement of the ‘High Precision Integer’ project. In this project I represent an integer as an std::vector&#60;bool> to allow for dynamic allocation of bits. Despite this project only needing a few changes to work, I made a large variety of changes to this project to make it much more sophisticated. First, I created a suite of unit tests to ensure that my code was robust. Next, I conducted performance evaluations of the code to see where changes needed to be made. Then I researched methods of optimizing my code. This research made me aware of faster methods of performing arithmetic than the traditional ‘grade school’ approach. For example, I began to use the Karatsuba algorithm for multiplying numbers larger than 640 bits. Once that was done my program could calculate the 500,000th term of the Fibonacci sequence in around an hour. Note that this number required 347,120 bits to represent and is approximately equal to 2.96 x 10<sup>104,493</sup>.',
        side_video: {
            source: '',
            type: ''
        },
        images: [],
        videos: []
    },
    {
        title: 'Programmable Christmas Tree',
        course: '',
        date: 'November - December 2020',
        language: 'Python / Arduino',
        src_link: 'https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/Arduino/AnimatedChristmasTree',
        keywords: 'Serial I/O, Information Encoding/Decoding',
        description: 'This project had some interesting challenges. First, the only hardware I had available was an Arduino Pro Mini, whose memory was much smaller than the size of an animation. Second, I couldn’t just move the animation to a separate file and let the Arduino read from that file because I did not have an SD card integrated into the Arduino and Arduinos cannot access files from computers. To solve these problems the project consists of three separate pieces of code. First, a method of creating an animation for the lights of a Christmas tree. Second, once the animation had been made and compiled to custom byte code, code needed to be made to communicate between my machine and the Arduino through the serial port. Finally, code needed to be created on the Arduino to receive the data from the serial port, show the data on the lights, and request more data from the animation. ',
        images: [],
        side_video: {
            source: 'assets/christmas.mov',
            type: 'video/mp4'
        },
        videos: []
    },
    {
        title: 'High Precision Integer',
        course: '',
        date: 'December 2019',
        language: 'C++',
        src_link: 'https://github.com/AaronTheNerd/BigInteger',
        keywords: '',
        description: 'Implementation of an unsigned integer class with with 1024 bits or 308 decimal digits of precision. This method allowed for the decimal printing of these numbers and utilized bitwise arithmetic for all of the integer manipulation.',
        side_video: {
            source: '',
            type: ''
        },
        images: [],
        videos: []
    },
    {
        title: 'IMDb Webscraper',
        course: '',
        date: 'March 2020',
        language: 'Python',
        src_link: 'https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/Python/IMDb%20Webscraper',
        keywords: 'Webscraping, Pandas, BeutifulSoup, Selenium',
        description: 'Created a webscraper using selenium, BeautifulSoup, and pandas to pull the top 250 movies off of IMBd. Once all of the movies had been saved to lists, the lists gets exported to an excel spreadsheet. Additionally, I designed a secondary program which would index into the spreadsheet and print the information of the movie.',
        side_video: {
            source: '',
            type: '',
        },
        images: [
            {
                source: 'assets/spreadsheet.png',
                alt: 'Spreadsheet'
            },
            {
                source: 'assets/python-output.png',
                alt: 'PythonOutput'
            }
        ],
        videos: []
    },
    {
        title: 'A Collection of Trees',
        course: '',
        date: 'September 2019',
        language: 'C++',
        src_link: 'https://github.com/AaronTheNerd/Trees',
        keywords: '',
        description: 'Implemented BST both as doubly-linked and singly-linked. Additionally, created a tree to implement Huffman encoding.',
        side_video: {
            source: '',
            type: '',
        },
        images: [],
        videos: []
    },
    {
        title: 'The Game of Life',
        course: '',
        date: 'December 2018',
        language: 'Java',
        src_link: 'https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/Java/The%20Game%20of%20Life',
        keywords: 'Java AWT, JavaX Swing',
        description: "Created a Conway's Game of Life simulation with a GUI. This was code that I made after my first year of college as such it does not reflect my current abilities programming. The code has two files: Cell.java and GOLGUI.java where Cell.java defines a Cell and GOLGUI.java defines the GUI, the board of Cells, and the functions updating the cells. If I were to do this again today there would be three files: Cell.java, Board.java, GoLGUI.java. The code is ugly, uncommented, and it has been too long since I made it to go back and fix it. Despite this, I am still proud of this code, it was my first time making a GUI by hand and I added a good amount of extra functions. For example, the generation count, population number, the auto-run feature, etc.",
        side_video: {
            source: '',
            type: '',
        },
        images: [],
        videos: [
            {
                source: 'assets/GoL.webm',
                type: 'video/webm'
            }
        ]
    },
];
export const REQUIRED_PROJECTS: Project[] = [
    {
        course: "CSCE 611 - Advanced Digital Design",
        title: 'RISC-V CPU',
        date: 'October - December 2020',
        language: 'Verilog',
        src_link: 'https://github.com/AaronTheNerd/CSCE611/tree/master/lab_jb',
        keywords: 'RISC-V, Assembly Programming, Unit Testing, End-to-End Testing',
        description: 'Designed and implemented a RISC-V CPU using SystemVerilog. This CPU implemented R-, I-, U-, J-, B-, and L-type commands. This CPU was run on a virtual DE2-115 board and needed two additional csrrw commands; one to read from the switches and another to write to the 7-segment displays. Once the CPU was finished it was used to run a program which would use a binary searching algorithm to find the square root of a number taken from the switches and display the approximated square root on the 7-segment displays. This algorithm used unsigned  fixed-point arithmetic with 18 bits of whole number digits and 14 bits of decimal place digits.',
        side_video: {
            source: '',
            type: '',
        },
        images: [],
        videos: []
    },
    {
        course: "CSCE 416 - Introduction to Computer Networks",
        title: 'Simple HTTP Client',
        date: 'April 2020',
        language: 'Java',
        src_link: '',
        keywords: 'Wireshark, HTTP',
        description: 'Implemented a simple HTTP client and observed the HTTP protocol in Wireshark. The program had to correctly GET from standard web servers. Additionally, Wireshark had to "capture" HTTP GET packet, HTTP response packet, and measure the delay between GET and response packets. The program also had to correctly handle one-hop HTTP redirects. Additionally, the output had to be saved in an output file (shown below).',
        side_video: {
            source: '',
            type: '',
        },
        images: [
            {
                source: 'assets/network-p1-output.png',
                alt: 'Output'
            }
        ],
        videos: []
    },
    {
        course: 'CSCE 274 - Robotic Applications & Design',
        title: 'Roomba Interface',
        date: 'October - December 2019',
        language: 'Python',
        src_link: 'https://github.com/AaronTheNerd/csce274_project1',
        keywords: 'Raspberry Pi, Serial I/O, Multithreading, Sensors, Closed-Loop Controller',
        description: 'Created an interface to control a Roomba. This interface allowed the Roomba to change modes, parse button inputs, parse bumpers, parse wheel drops, parse cliff sensors, parse light bumpers, drive straight, turn, and rotate. We used this interface to: <ul> <li>Implement a random-walk method which could detect bumping into the wall and stop before rolling off of a cliff.</li> <li>Additionally, we added a closed-loop PD controller which allowed the Roomba to accurately and smoothly follow a wall.</li> <li>Finally, we added more functionality to the previous bullet-point which allowed the Roomba to detect a charging station and park itself.</li></ul>',
        side_video: {
            source: 'assets/roomba.mov',
            type: 'video/mp4',
        },
        images: [],
        videos: []
    },
    {
        course: 'ELCT 222 - Signals and Systems',
        title: 'Audio Visualizer',
        date: 'December 2019',
        language: 'Matlab',
        src_link: 'https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/MatLab/AudioVisualizer',
        keywords: 'FFT',
        description: `Used a fast Fourier transfer method to create a simple audio visualizer. In order to make the visualizer more visually interesting we used a stacked bar graph to add dynamic colors and "falling bars." In order to use the dynamic colors, the num_of_bars variable in CLICK_ME.m can be changed to change the number of colors. The color scaling works by using a pre-defined color map. The falling bar was achieved by adding a bar the same color as the background and having a matrix of "differences" which would slowly lower each iteration. Unfortunately, it is difficult to record this as MatLab's graphing functions tend to use a lot of processing power. Despite this, I still embedded a video of the visualizer to show the concept.`,
        side_video: {
            source: '',
            type: '',
        },
        images: [],
        videos: [
            {
                source: 'assets/visualizer.webm',
                type: 'video/webm',
            }
        ]
    },
    {
        course: 'CSCE 350 - Data Structure & Algorithms',
        title: 'Coin-Row and Robot-Coin Solution',
        date: 'April 2019',
        language: 'C++',
        src_link: 'https://github.com/csce350-spring19/program-5-AaronTheNerd/tree/master/src',
        keywords: '',
        description: 'Implemented dynamic programming solutions for the coin-row problem and the robot-coin problem. These solutions were able to return the correct values and other methods were made to backtrack through the solution to give the specific moves which led to the solution.',
        side_video: {
            source: '',
            type: '',
        },
        images: [],
        videos: []
    },
    {
        course: 'CSCE 317 - Computer Systems Engineering',
        title: 'Simulated SPI Transactions',
        date: 'April 2020',
        language: 'C++',
        src_link: 'https://github.com/AaronTheNerd/virtual_spi',
        keywords: 'SPI Data Transfer, Bit Manipulation',
        description: 'Coordinated data transfer between a simulated sensor and flash memory. The implementation utilized a bit-banged SPI transfer method. This method was able to read, write, and stream bytes between devices. Additionally, this implementation verified the WHO_AM_I values of each device.',
        side_video: {
            source: '',
            type: '',
        },
        images: [],
        videos: []
    },
    {
        course: 'CSCE 311 - Operating Systems',
        title: 'Custom Syscall',
        date: 'November 2019',
        language: 'C',
        src_link: '',
        keywords: 'Linux Kernel, Virtual Memory',
        description: 'Created a custom syscall which would poke different area in virtual memory and give information about the properties of that space in memory. For example, the syscall would give information about whether or not the memory was occupied and whether the memory is readable, writable, or executable. The syscall required a recompilation of the linux kernel.',
        side_video: {
            source: '',
            type: '',
        },
        images: [],
        videos: []
    },
];
export const OPTIONAL_PROJECTS: Project[] = [
    {
        course: 'CSCE 416 - Introduction to Computer Networks',
        title: 'Simple TCP Connection',
        date: 'April 2020',
        language: 'Java',
        src_link: 'https://github.com/AaronTheNerd/csce416ec',
        keywords: 'TCP Connection',
        description: 'Created an implementation of a TCP connection by creating wrapper functions from an existing UDP connection. The TCP connection implemented congestion avoidance and reliable data transfer.',
        side_video: {
            source: '',
            type: '',
        },
        images: [],
        videos: []
    },
    {
        course: 'STAT 509 - Statistics for Engineers',
        title: 'Runtime Optimization of MergeSort via Multithreading',
        date: 'November - December 2019',
        language: 'C++',
        src_link: 'https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/C++/MergeSort',
        keywords: 'Multithreading, Performance Analysis',
        description: 'Created a program which implemented MergeSort on a list and used threads to reduce the runtime. In order to make this an experiment for a statistics course, I varied the amount of threads and averaged the times in microseconds after a few thousand tests.',
        side_video: {
            source: '',
            type: '',
        },
        images: [],
        videos: []
    },
    {
        course: 'CSCE 146 - Algorithmic Design II',
        title: 'All Possible Words from Grid',
        date: 'April 2018',
        language: 'Java',
        src_link: '',
        keywords: '',
        description: 'Takes a 4x4 grid of characters and returns every word which can be made by connecting adjacent letters. The program iterated through each letter as a starting point then recursively checked the neighboring characters to generate strings which could be checked against a dictionary to check for valid words.',
        side_video: {
            source: '',
            type: '',
        },
        images: [],
        videos: []
    }
];