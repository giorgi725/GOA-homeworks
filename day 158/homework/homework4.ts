// 5) შექმენით Enum სახელად Status, რომელსაც ექნება Pending, Approved და Rejected მნიშვნელობები. შექმენით ცვლადი Status-ის Type-ით და მიანიჭეთ მას სხვადასხვა Enum მნიშვნელობა

enum Status {
    Pending,
    Approved,
    Rejected
}

let status1: Status = Status.Pending
let status2: Status = Status.Approved
let status3: Status = Status.Rejected