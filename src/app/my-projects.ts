import { Project } from './project';

export const PERSONAL_PROJECTS: Project[] = [
    {
        title: 'Programmable Christmas Tree',
        course: '',
        date: 'December 2020',
        language: 'Python / Arduino',
        src_link: 'https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/Arduino/Tree',
        description: 'This project had some interesting challenges. First, the only hardware I had available was an Arduino Pro Mini, whose memory was much smaller than the size of an animation. Second, I couldn’t just move the animation to a separate file and let the Arduino read from that file because I did not have an SD card integrated into the Arduino and Arduinos cannot access files from computers. To solve these problems the project consists of three separate pieces of code. First, a method of creating an animation for the lights of a Christmas tree. Second, once the animation had been made and compiled to custom byte code, code needed to be made to communicate between my machine and the Arduino through the serial port. Finally, code needed to be created on the Arduino to receive the data from the serial port, show the data on the lights, and request more data from the animation. ',
        images: [],
        side_video: {
            source: 'assets/christmas.mov',
            type: 'video/mp4'
        },
        videos: []
    },
    {
        title: 'uInteger',
        course: '',
        date: 'November 2020',
        language: 'C++',
        src_link: 'https://github.com/AaronTheNerd/Projects/tree/master/uInteger',
        description: 'Implementation of an arbitrary precision unsigned integer. This project is the improved version of the following project. In this project I replaced the std::bitset from the BigInteger project with an std::vector<bool>. This allowed for higher precision than in the BigInteger project and a potential speedup from not having to store hundreds of bits when only few are needed. For most operations, almost no changes needed to be made from BigInteger. The only real changes were made with when bits needed to be pushed or popped. Additionally, I moved the string manipulation operations into the same header file as the bit manipulations. I also simplified the string to uInteger conversion method. I also used uIntegers to convert uIntegers to strings by repeatedly dividing the number by 10 and saving the remainder. I used this implementation to calculate the Fibonacci sequence up to the 100,000th term. The decimal output was 20,900 decimal digits. However, This calculation took 41 minutes and 11 seconds. I would like to spend more time optimizing this implementation.',
        side_video: {
            source: '',
            type: ''
        },
        images: [],
        videos: []
    },
    {
        title: 'BigInteger',
        course: '',
        date: 'December 2019',
        language: 'C++',
        src_link: 'https://github.com/AaronTheNerd/Projects/tree/master/BigInteger',
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
        title: 'Trees',
        course: '',
        date: 'September 2019',
        language: 'C++',
        src_link: 'https://github.com/AaronTheNerd/Projects/tree/master/Trees',
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
        date: 'December 2020',
        language: 'Verilog',
        src_link: '',
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
        date: 'December 2019',
        language: 'Python',
        src_link: 'https://github.com/AaronTheNerd/csce274_project1',
        description: 'Created an interface to control a Roomba. This interface allowed the Roomba to change modes, parse button inputs, parse bumpers, parse wheel drops, parse cliff sensors, parse light bumpers, drive straight, turn, and rotate. We used this interface to: (1) Implement a random-walk method which could detect bumping into the wall and stop before rolling off of a cliff. (2) Additionally, we added a closed-loop PD controller which allowed the Roomba to accurately and smoothly follow a wall. (3) Finally, we added more functionality to the previous bullet-point which allowed the Roomba to detect a charging station and park itself.',
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
        language: 'Verilog',
        src_link: 'https://github.com/AaronTheNerd/virtual_spi',
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
        description: 'Created a custom syscall which would poke different area in virtual memory and give information about the properties of that space in memory. For example, the syscall would give information about whether or not the memory was occupied and whether the memory is readable, writable, or executable. The syscall required a recompilation of the linux kernel.',
        side_video: {
            source: '',
            type: '',
        },
        images: [],
        videos: []
    },
    {
        course: 'STAT 509 - Statistics for Engineers',
        title: 'Runtime Optimization of MergeSort',
        date: 'December 2019',
        language: 'C++',
        src_link: '',
        description: 'Created a program which implemented MergeSort on a list and used threads to reduce the runtime. In order to make this an experiment for a statistics course, I varied the amount of threads and averaged the times in microseconds after a few thousand tests.',
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
        description: 'Created an implementation of a TCP connection by creating wrapper functions from an existing UDP connection. The TCP connection implemented congestion avoidance and reliable data transfer.',
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
        description: 'Takes a 4x4 grid of characters and returns every word which can be made by connecting adjacent letters. The program iterated through each letter as a starting point then recursively checked the neighboring characters to generate strings which could be checked against a dictionary to check for valid words.',
        side_video: {
            source: '',
            type: '',
        },
        images: [],
        videos: []
    }
];