"use strict";

const el = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author")
}

//http//api.unplash.com/photos/?client_id=YOUR_ACCESS_KEY

async function getRandomPhoto() {
    const url = "http://localhost:1776/api/getRandomImage";
    try {
        const response = await fetch(url);
        const data = await response.json()
        const receivedPhoto = data

        const secCon = document.querySelector(".container")
        secCon.style.backgroundImage = `url(${receivedPhoto})`
    } catch (error) {
        console.log(error)
    }
}


// Iterating through objects.
const quotes = [
    {
        quote: "It is better to be a warrior in a garden, than a gardener in a war.",
        author: "Miyamoto Musashi, The Book of Five Rings",
    },

    {
        quote: "Private time is absolutely essential if a private identity is going to develop, and private time is equally essential to the development of a code of private values, without which we aren’t really individuals at all.",
        author: "John Taylor Gatto, Dumbing Us Down: The Hidden Curriculum of Compulsory Schooling",
    },

    {
        quote: "Technopoly is a state of culture. It is also a state of mind. It consists in the deification of technology, which means that the culture seeks its authorization in technology, finds its satisfactions in technology, and takes its orders from technology.",
        author: "Neil Postman, Technopoly: The Surrender of Culture to Technology",
    },

    {
        quote: "Truth is not what you want it to be; it is what it is. And you must bend to its power or live a lie.",
        author: "Miyamoto Musashi",
    },

    {
        quote: "You either learn your way towards writing your own script in life, or you unwittingly become an actor in someone else’s script.",
        author: "John Taylor Gatto, Dumbing Us Down: The Hidden Curriculum of Compulsory Schooling",
    },

    {
        quote: "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
        author: "Carl Gustav Jung",
    },

    {
        quote: "It is not death that a man should fear, but he should fear never beginning to live.",
        author: "Marcus Aurelius, Meditations",
    },

    {
        quote: "If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle.",
        author: "Sun Tzu, The Art of War", 
    },

    {
        quote: "Hastiness and superficiality are the psychic diseases of the twentieth century.",
        author: "Aleksandr I. Solzhenitsyn",
    },

    {
        quote: "There are no dangerous thoughts; thinking it-self is dangerous.",
        author: "Hannah Arendt",
    },

    {
        quote: "Anxiety is an even better teacher than reality, for one can temporarily evade reality by avoiding the distasteful situation; but anxiety is a source of education always present because one carries it within.",
        author: "Rollo May, The Meaning of Anxiety"
    },

]

function loopThroughQuotes() {
    let currentIndex = 0;
    setInterval(() => {
        if (currentIndex < quotes.length) {
            el.quote.innerText = quotes[currentIndex].quote;
            el.author.innerText = quotes[currentIndex].author;
            currentIndex++;
        } else {
            currentIndex = 0;
        }
    }, 7000)
}

setTimeout(loopThroughQuotes, 7000);