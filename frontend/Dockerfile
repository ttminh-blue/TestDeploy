# === STAGE 1: Build Angular app ===
FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# Chạy lệnh build tạo ra các file tĩnh trong thư mục dist
RUN npx ng build --configuration production

# === STAGE 2: Chạy bằng Nginx ===
FROM nginx:alpine

# Copy file cấu hình nginx của bạn vào container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy toàn bộ file tĩnh từ Stage 1 sang thư mục gốc của Nginx
# CHÚ Ý: Bạn cần check xem tên thư mục trong dist của bạn là gì (thường là tên dự án)
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]