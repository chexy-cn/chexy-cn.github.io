// 加载学生数据
let students = [];

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        students = data;
    })
    .catch(error => {
        console.error('加载数据失败:', error);
        document.getElementById('result').innerHTML = '<p class="error">无法加载数据，请稍后再试。</p>';
    });

function searchStudent() {
    const studentId = document.getElementById('student-id').value.trim();
    const resultDiv = document.getElementById('result');
    
    if (!studentId) {
        resultDiv.innerHTML = '<p class="error">请输入学号</p>';
        return;
    }

    const student = students.find(s => s.学号 === studentId);
    
    if (!student) {
        resultDiv.innerHTML = '<p class="error">未找到该学号的学生</p>';
        return;
    }

    // 显示学生信息
    let html = `
        <div class="student-info">
            <h2>${student.姓名} 同学的信息</h2>
            <div class="info-row">
                <span class="info-label">学号:</span>
                <span>${student.学号}</span>
            </div>
            
            <div class="attendance">
                <h3>签到情况</h3>
                <table>
                    <tr>
                        <th>第一章</th>
                        <th>第二章</th>
                    </tr>
                    <tr>
                        <td>${formatAttendance(student.签到情况.第一章)}</td>
                        <td>${formatAttendance(student.签到情况.第二章)}</td>
                    </tr>
                </table>
            </div>
            
            <div class="scores">
                <h3>小测成绩</h3>
                <table>
                    <tr>
                        <th>第三章</th>
                        <th>第四章</th>
                    </tr>
                    <tr>
                        <td>${student.小测成绩.第三章}</td>
                        <td>${student.小测成绩.第四章}</td>
                    </tr>
                </table>
            </div>
        </div>
    `;
    
    resultDiv.innerHTML = html;
}

function formatAttendance(value) {
    if (value === 1) return '√ 出席';
    if (value === '缺勤') return '× 缺勤';
    if (value === '请假') return '△ 请假';
    if (value === '强基活动') return '○ 强基活动';
    return value;
}
