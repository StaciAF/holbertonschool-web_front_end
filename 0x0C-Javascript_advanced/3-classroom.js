function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        }
    }
    let students = [];
    for (let count = 0; count < numbersOfStudents; count++) {
        let seatCount = studentSeat(count + 1);
        students.push(seatCount);
    }
    return students;
}

let classRoom = createClassRoom(10);
