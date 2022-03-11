interface FullName {
    first: string;
    last: string;
}

interface Callback {
    (result: number): void
}

let myName: FullName = {first: "Andrew", last: "Xu"}

const outputToConsole: Callback = function(result) {
    console.log("Output: " + result)
}

function getNameLength(name: FullName, callback: Callback): void {
    const len = name.first.length + name.last.length
    callback(len)
}

getNameLength(myName, outputToConsole)