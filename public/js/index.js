"use strict";

const el = {
    quote: document.getElementById('quote'),
    author: document.getElementById("author")

}

async function getRandomPhoto() {
    const url = "";
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

const quotes = [
    {
        quote: '"It is better to be a warrior in a garden, than a gardener in a war."',
        author: "Miyamoto Musashi, The Book of Five Rings",
    },

    {
        quote: '"Private time is absolutely essential if a private identity is going to develop, and private time is equally essential to the development of a code of private values, without which we aren’t really individuals at all."',
        author: "John Taylor Gatto, Dumbing Us Down: The Hidden Curriculum of Compulsory Schooling",
    },

    {
        quote: '"Technopoly is a state of culture. It is also a state of mind. It consists in the deification of technology, which means that the culture seeks its authorization in technology, finds its satisfactions in technology, and takes its orders from technology."',
        author: "Neil Postman, Technopoly: The Surrender of Culture to Technology",
    },

    {
        quote: '"Truth is not what you want it to be; it is what it is. And you must bend to its power or live a lie."',
        author: "Miyamoto Musashi",
    },

    {
        quote: '"You either learn your way towards writing your own script in life, or you unwittingly become an actor in someone else’s script."',
        author: "John Taylor Gatto, Dumbing Us Down: The Hidden Curriculum of Compulsory Schooling",
    },

    {
        quote: '"In theoretical, metaphorical terms, the idea I began to explore was this one: that teaching is nothing like the art of painting, where, by the addition of material to a surface, an image is synthetically produced, but more like the art of sculpture, where, by the subtraction of material, an image already locked in the stone is enabled to emerge. It is a crucial distinction."',
        author: "John Taylor Gatto, Dumbing Us Down: The Hidden Curriculum of Compulsory Schooling",
    },

    {
        quote: '“It is not death that a man should fear, but he should fear never beginning to live.”',
        author: "Marcus Aurelius, Meditations",
    },

]


function loopThroughQuotes() {
    let currentIndex = 0;
    setInterval(() => {
        if (count < quotes.length) {
            el.quote.innerText = quotes[index].quote;
            el.author.innerText = quotes[index].author;
            index++;
        } else {
            currentIndex = 0;
        }
    }, 3000)
}

setTimeout(loopThroughQuotes, 3000);