FROM node:20

WORKDIR /app

# 1. Cài đặt toàn bộ thư viện
COPY package*.json ./
RUN npm install

# 2. Copy mã nguồn vào container
COPY . .

# 3. Build code TypeScript sang JavaScript NGAY TRONG LÚC TẠO IMAGE
RUN npm run build

EXPOSE 3000

# 4. Chạy ứng dụng bằng lệnh start mới (đã rất nhẹ)
CMD ["npm", "start"]