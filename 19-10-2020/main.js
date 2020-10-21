// Bài 1
// Viết một chương trình nhập lương nhân viên, tính thuế thu nhập và lương ròng(số tiền lương thực sự mà nhân viên đó nhận được).Với các thông số giả sử như sau(không theo luật lương, chỉ là con số giả sử để dễ tính toán):
// 30 % thuế thu nhập nếu lương là 15 triệu.
// 20 % thuế thu nhập nếu lương từ 7 đến 15 triệu.
// 10 % thuế thu nhập nếu lương dưới 7 triệu.
const getSalary = (salary) => {
    if (salary >= 15000000) {
        console.log('Thuế thu nhập', salary * 0.3)
        console.log('Lương ròng   ', salary * 0.7)
    } else if (salary >= 7000000) {
        console.log('Thuế thu nhập', salary * 0.2)
        console.log('Lương ròng   ', salary * 0.8)
    } else {
        console.log('Thuế thu nhập', salary * 0.1)
        console.log('Lương ròng   ', salary * 0.9)
    }
}

// Bài 2
// Viết chương trình nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10. Biết tuổi vào lớp 10 của học sinh là 16.
const checkAge = (age) => {
    if (age >= 16) {
        console.log('Đủ điều kiện vào lớp 10')
    } else {
        console.log('Chưa đủ điều kiện vào lớp 10')
    }
}

// Bài 3
// Viết chương trình nhập một số nguyên bất kỳ và in kết quả ra màn hình để thông báo cho người dùng biết số đó lớn hay nhỏ hơn 100.
const checkNumber = (number) => {
    if (number > 100) {
        console.log('Số đã nhập lớn hơn 100')
    } else if (number < 100) {
        console.log('Số đã nhập nhỏ hơn 100')
    } else {
        console.log('Số đã nhập là 100')
    }
}

// Bài 4
// Viết chương trình nhập vào 3 số nguyên và tìm số lớn nhất trong 3 số đó.
const maxNumber = (firstNumber, secondNumber, thirdNumber) => {
    let max = firstNumber
    if (max < secondNumber) {
        max = secondNumber
    }
    if (max < thirdNumber) {
        max = thirdNumber
    }
    console.log('Số lớn nhất là', max)
}

// Bài 5
// Viết chương trình xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ.Nếu:
// Điểm trung bình >= 9.0 là hạng A.
// Điểm trung bình >= 7.0 và < 9.0 là hạng B
// Điểm trung bình >= 5.0 và < 7.0 là hạng C
// Điểm trung bình < 5.0 là hạng F
const getRank = (score1, score2, score3) => {
    let score = (score1 + score2 + sccore3) / 3;
    if (score >= 9) {
        console.log('Hạng A')
    } else if (score >= 7) {
        console.log('Hạng B')
    } else if (score >= 5) {
        console.log('Hạng C')
    } else {
        console.log('Hạng F')
    }
}

// Bài 6
// Viết chương trình để tìm nghiệm của phương trình bậc hai ax2 + bx + c = 0. Biết rằng:
// Nếu a và b cùng bằng 0 thì phương trình vô nghiệm.
// Nếu a = 0 thì phương trình có một nghiệm là(-c / b).
// Nếu b2 - 4 ac < 0, thì phương trình vô nghiệm.
// Nếu không, phương trình có hai nghiệm, dùng công thức tính nghiệm để tính.
const solveEquation = (a, b, c) => {
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                console.log('Phương trình có vô số nghiệm')
            } else {
                console.log('Phương trình vô nghiệm')
            }
        } else {
            console.log('Phương trình có nghiệm duy nhất x=', -c / b)
        }
    } else {
        delta = b * b - 4 * a * c;
        if (delta > 0) {
            console.log('Phương trình có 2 nghiệm phân biệt x1 =', (-b + Math.sqrt(delta)) / 2 / a, 'và x2 =', (-b - Math.sqrt(delta)) / 2 / a)
        } else if (delta == 0) {
            console.log('Phương trình có nghiệm duy nhất x =', -b / 2 / a)
        } else {
            console.log('Phương trình vô nghiệm')
        }
    }
}

// Bài 7
// Cửa hàng của bạn nhận gửi bán sản phẩm cho một công ty khác và hưởng hoa hồng, với mức hoa hồng theo doanh số bán như sau:
// 5 % nếu tổng doanh số nhỏ hơn hoặc bằng 100 triệu.
// 10 % nếu tổng doanh số nhỏ hơn hoặc bằng 300 triệu.
// 20 % nếu tổng doanh số là lớn hơn 300 triệu.Hãy viết chương trình JS để tính hoa hồng bạn sẽ nhận được dựa trên doanh số bán hàng.
const getCommission = (sales) => {
    if (sales <= 100) {
        console.log('Tiền hoa hồng:', sales * 0.05, 'triệu')
    } else if (sales <= 300) {
        console.log('Tiền hoa hồng:', sales * 0.1, 'triệu')
    } else {
        console.log('Tiền hoa hồng:', sales * 0.2, 'triệu')
    }
}

// Bài 8
// Viết chương trình để tính cước điện thoại bàn cho một hộ gia đình với các thông số như sau:
// Phí thuê bao bắt buộc là 25 nghìn.
// 600 đồng cho mỗi phút gọi của 50 phút đầu tiên.
// 400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
// 200 đồng cho bất kỳ phút gọi nào sau 200 phút đầu tiên.
const getPhoneCharges = (minutes) => {
    let money = 25000;
    if (minutes <= 50) {
        money += minutes * 600
    } else if (minutes <= 200) {
        money += 50 * 600 + (minutes - 50) * 400
    } else {
        money += 50 * 600 + 150 * 400 + (minutes - 200) * 200
    }
    console.log('Cước phí phải trả:', money)
}