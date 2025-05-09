import pandas as pd
import json

# 读取Excel文件
df = pd.read_excel('C203.xlsx')

# 转换数据格式
students = []
for _, row in df.iterrows():
    student = {
        '学号': str(row['学号']),
        '姓名': row['姓名'],
        '签到情况': {
            '第一次': row['第一次'],
            '第二次': row['第一次']
        },
        '小测成绩': {
            '第三章': row['第三章'],
            '第四章': row['第四章']
        }
    }
    students.append(student)

# 保存为JSON
with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(students, f, ensure_ascii=False, indent=2)

print("数据已转换为data.json")
