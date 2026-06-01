// 6) გაეცანით Process module-ის ძირითად ფუნქციებს (process.argv, process.env, process.exit) და შექმენით პროგრამა, რომელიც იღებს command line არგუმენტებს და environment variables-ს, შემდეგ ბეჭდავს მათ კონსოლში

console.log("=== Process Module Example ===");

console.log("\nCommand Line Arguments:");

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("No arguments provided.");
} else {
    args.forEach((arg, index) => {
        console.log(`Argument ${index + 1}: ${arg}`);
    });
}

console.log("\nEnvironment Variables:");

console.log("USERNAME:", process.env.USERNAME);
console.log("COMPUTERNAME:", process.env.COMPUTERNAME);
console.log("PATH:", process.env.PATH);


console.log("\nCustom Environment Variable:");

console.log("MY_APP =", process.env.MY_APP || "Not Defined");

console.log("\nProgram finished.");
process.exit(0);

// process.argv — მომხმარებლის მიერ გადაცემული არგუმენტების მიღება.
// process.env — environment variables-ის წაკითხვა.
// process.exit() — პროგრამის დასრულება სასურველი სტატუს კოდით.