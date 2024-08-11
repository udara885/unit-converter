/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById( "input" )
const convertBtn = document.getElementById( "convert-btn" )
const length = document.getElementById( "length" )
const volume = document.getElementById( "volume" )
const mass = document.getElementById( "mass" )

convertBtn.addEventListener( "click", function ()
{
    const inputValue = input.value
    convertLength(inputValue)
    convertVolume(inputValue)
    convertMass(inputValue)
} );

function convertLength (input)
{
    length.textContent = `${input} meters = ${(input * 3.281).toFixed(3)} feet | ${input} feet = ${(input / 3.281).toFixed(3)} meters`
}

function convertVolume (input)
{
    volume.textContent = `${input} liters = ${(input * 0.264).toFixed(3)} gallons | ${input} gallons = ${(input / 0.264).toFixed(3)} liters`
}

function convertMass (input)
{
    mass.textContent = `${input} kilos = ${(input * 2.204).toFixed(3)} pounds | ${input} pounds = ${(input / 2.204).toFixed(3)} kilos`
}