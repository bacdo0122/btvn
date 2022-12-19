import os
import numpy as np
from numpy.fft import fft2, ifft2
from scipy.signal import gaussian, convolve2d
import matplotlib.pyplot as plt
import cv2

def blur(img, kernel_size = 3):
    dummy = np.copy(img)  # coppy ảnh
    h = np.eye(kernel_size) / kernel_size  # Tạo ma trận đơn vị và chia cho kernel_size(3)
    dummy = convolve2d(dummy, h, mode = 'valid')  # Sử dụng phép tích chập với ma trận gốc là dummy, filter là h (b tham khảo thêm khái niệm tích chập trên GG)
    return dummy


def add_gaussian_noise(img, sigma):
	gauss = np.random.normal(0, sigma, np.shape(img))  # Lấy ngẫu nhiên theo phân phối chuẩn (nhiễu)
	noisy_img = img + gauss  # Cộng nhiễu vs ảnh gốc
	noisy_img[noisy_img < 0] = 0  # 2 DÒNG Cuối là chuẩn hóa giá trị do miền giá trị chỉ từ [0, 255]
	noisy_img[noisy_img > 255] = 255
	return noisy_img


def gaussian_kernel(kernel_size = 3):
    h = gaussian(kernel_size, kernel_size / 3).reshape(kernel_size, 1)  # Tạo 1 ma trận chuẩn hóa Gauss, sau đó tiên shanfh chuẩn hóa
    h = np.dot(h, h.transpose()) # Nhân 2 ma trận (b tham khảo thêm phép dot)
    h /= np.sum(h)  ## h = h/ tổng các phần tử trong h
    return h


def wiener_filter(img, kernel, K):
    kernel /= np.sum(kernel)  # kernel chia cho tổng các phần tử của ma trận
    dummy = np.copy(img)  # Coppy ảnh
    dummy = fft2(dummy)  # Tính toán biến đổi Fourier rời rạc 1 chiều
    kernel = fft2(kernel, s = img.shape)  # Tính toán biến đổi Fourier rời rạc 1 chiều
    kernel = np.conj(kernel) / (np.abs(kernel) ** 2 + K) # Tìm liên hợp (mình cũng k hiểu lắm)
    dummy = dummy * kernel  # Nhân 2 ma trận
    dummy = np.abs(ifft2(dummy))  # Tính trị tuyệt dối Fourier
    return dummy

def rgb2gray(rgb):
    	return np.dot(rgb[...,:3], [0.2989, 0.5870, 0.1140])  # Chuyển ảnh sang xám


if _name_ == '_main_':
    file_name = os.path.join('C:/Users/HaiPhamDepTraiNhuCho/OneDrive/Desktop/AAAAAAAAAAAAAAAA/Wiener_Filter/origin/1.jpg')   # link ảnh
    
    img = rgb2gray(plt.imread(file_name))  # đọc ảnh và chuyển về fray

    # Làm mờ ảnh
    blurred_img = blur(img, kernel_size = 15)

    # Làm nhiễu ảnh bằng Gauss
    noisy_img = add_gaussian_noise(blurred_img, sigma = 20)
    plt.imshow(noisy_img, cmap = 'gray')
    plt.savefig("C:/Users/HaiPhamDepTraiNhuCho/OneDrive/Desktop/AAAAAAAAAAAAAAAA/Wiener_Filter/noise/4.jpg")

    # Áp dụng Wiener Filter
    kernel = gaussian_kernel(3)
    filtered_img = wiener_filter(noisy_img, kernel, K = 10)

    plt.imshow(filtered_img, cmap = 'gray')
    plt.savefig("C:/Users/HaiPhamDepTraiNhuCho/OneDrive/Desktop/AAAAAAAAAAAAAAAA/Wiener_Filter/restoration/4.jpg")  # Link lưu ảnh qua xử lý


    # Hiển thị kết quả
    display = [img, blurred_img, noisy_img, filtered_img]
    label = ['Original Image', 'Motion Blurred Image', 'Motion Blurring + Gaussian Noise', 'Wiener Filter applied']

    fig = plt.figure(figsize=(12, 10))


    for i in range(len(display)):
        fig.add_subplot(2, 2, i+1)
        plt.imshow(display[i], cmap = 'gray')
        plt.title(label[i])

    plt.show()
    #sua them mot chut bai