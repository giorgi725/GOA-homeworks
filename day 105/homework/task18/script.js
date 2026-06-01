// 19) ახსენით განსხვავება synchronous და asynchronous event handling-ს შორის Node.js-ში და მოიყვანეთ მაგალითი EventEmitter-ით

// Synchronous Event Handling

// სინქრონული event handling ნიშნავს, რომ EventEmitter-ის listener-ები სრულდება მაშინვე, იმავე თანმიმდევრობით, როგორც დარეგისტრირდა.

// როდესაც emit() იძახება:

// პირველი listener სრულდება.
// შემდეგ მეორე listener.
// შემდეგ მესამე listener.
// მხოლოდ ამის შემდეგ გრძელდება პროგრამის შესრულება.

// Asynchronous Event Handling

// ასინქრონული event handling ნიშნავს, რომ listener-ის შიგნით ვიყენებთ ისეთ ფუნქციებს, როგორიცაა:

// setTimeout()
// setImmediate()
// process.nextTick()

// ასეთ შემთხვევაში callback მოგვიანებით სრულდება და პროგრამა არ ჩერდება მის მოლოდინში.