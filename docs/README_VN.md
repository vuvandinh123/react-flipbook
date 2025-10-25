# React Flipbook - Tài liệu hướng dẫn

> **Thư viện này được xây dựng và cải tiến từ thư viện [page-flip](https://github.com/Nodlik/StPageFlip)**, bổ sung thêm các tính năng React-friendly như hooks, auto-flip, keyboard navigation và dễ dàng custom hơn.

## 📦 Cài đặt

```bash
npm i @vuvandinh203/react-flipbook
```

**📖 Ngôn ngữ dịch**

Tiếng Việt | [English](https://github.com/vuvandinh123/react-flipbook/blob/main/README.md)

## 🚀 Sử dụng cơ bản

```jsx
import React from 'react';
import { ReactFlipBook } from '@vuvandinh203/react-flipbook';

function App() {
  return (
    <ReactFlipBook
      width={500}  // Bắt buộc
      height={700} // Bắt buộc
      showNavigationButtons={true}
      showPageNumbers={true}
    >
      <div className="page">Trang 1</div>
      <div className="page">Trang 2</div>
      <div className="page">Trang 3</div>
      <div className="page">Trang 4</div>
    </ReactFlipBook>
  );
}
```

## 📋 Các Props (Tham số)

### Props cơ bản

| Prop | Type | Mặc định | Mô tả |
|------|------|----------|-------|
| `width` | `number` | - | **BẮT BUỘC** - Chiều rộng của mỗi trang (px) |
| `height` | `number` | - | **BẮT BUỘC** - Chiều cao của mỗi trang (px) |
| `className` | `string` | `''` | Class CSS cho container |
| `style` | `CSSProperties` | `{}` | Style inline cho container |
| `children` | `ReactNode` | - | Các trang của sách (bắt buộc) |
| `currentPage` | `number` | - | Trang hiện tại (controlled) |
| `onPageChange` | `(page: number) => void` | - | Callback khi chuyển trang |

### Props PageFlip Core (Cấu hình hiệu ứng lật)

| Prop | Type | Mặc định | Mô tả |
|------|------|----------|-------|
| `size` | `'fixed' \| 'stretch'` | `'fixed'` | Chế độ kích thước: fixed (cố định) hoặc stretch (co giãn) |
| `minWidth` | `number` | - | Chiều rộng tối thiểu (px) khi size='stretch' |
| `maxWidth` | `number` | - | Chiều rộng tối đa (px) khi size='stretch' |
| `minHeight` | `number` | - | Chiều cao tối thiểu (px) khi size='stretch' |
| `maxHeight` | `number` | - | Chiều cao tối đa (px) khi size='stretch' |
| `startPage` | `number` | `0` | Trang bắt đầu khi khởi tạo |
| `flippingTime` | `number` | `1000` | Thời gian lật trang (ms) |
| `usePortrait` | `boolean` | `true` | Sử dụng chế độ portrait (dọc) |
| `startZIndex` | `number` | `0` | Z-index bắt đầu cho các trang |
| `autoSize` | `boolean` | `true` | Tự động điều chỉnh kích thước |
| `showCover` | `boolean` | `false` | Hiển thị bìa sách (trang đầu và cuối đặc biệt) |
| `drawShadow` | `boolean` | `true` | Vẽ bóng đổ khi lật trang |
| `maxShadowOpacity` | `number` | `1` | Độ mờ tối đa của bóng đổ (0-1) |
| `mobileScrollSupport` | `boolean` | `true` | Hỗ trợ scroll trên mobile |
| `clickEventForward` | `boolean` | `true` | Chuyển tiếp sự kiện click |
| `useMouseEvents` | `boolean` | `true` | Sử dụng sự kiện chuột |
| `swipeDistance` | `number` | `30` | Khoảng cách tối thiểu để swipe (px) |
| `showPageCorners` | `boolean` | `true` | Hiển thị góc trang có thể kéo |
| `disableFlipByClick` | `boolean` | `false` | Vô hiệu hóa lật trang bằng click |

### Props React-Specific (Tính năng mở rộng)

| Prop | Type | Mặc định | Mô tả |
|------|------|----------|-------|
| `showNavigationButtons` | `boolean` | `false` | Hiển thị nút điều hướng |
| `showPageNumbers` | `boolean` | `false` | Hiển thị số trang |
| `enableKeyboardNav` | `boolean` | `true` | Cho phép điều hướng bằng bàn phím (← →) |
| `autoFlipDelay` | `number` | - | Thời gian delay giữa các lần lật tự động (ms) |
| `autoFlipDirection` | `'next' \| 'prev'` | `'next'` | Hướng lật tự động |
| `renderPage` | `(page: ReactElement, index: number) => ReactElement` | - | Custom render cho mỗi trang |
| `renderNavigationButton` | `(type: 'prev' \| 'next', onClick: () => void) => ReactNode` | - | Custom nút điều hướng |
| `renderPageNumber` | `(current: number, total: number) => ReactNode` | - | Custom hiển thị số trang |
| `renderOnlyPageLengthChange` | `boolean` | `false` | Chỉ render lại khi số lượng trang thay đổi |

### Props Events (Sự kiện PageFlip)

| Prop | Type | Mô tả |
|------|------|-------|
| `onFlip` | `(e: FlipEvent) => void` | Sự kiện khi bắt đầu lật trang |
| `onChangeOrientation` | `(e: OrientationEvent) => void` | Sự kiện khi thay đổi orientation |
| `onChangeState` | `(e: StateEvent) => void` | Sự kiện khi thay đổi trạng thái |
| `onInit` | `(e: InitEvent) => void` | Sự kiện khi khởi tạo xong |
| `onUpdate` | `(e: UpdateEvent) => void` | Sự kiện khi cập nhật |

## 🎮 Sử dụng Ref (Điều khiển nâng cao)

```jsx
import React, { useRef } from 'react';
import { ReactFlipBook } from '@vuvandinh203/react-flipbook';

function App() {
  const bookRef = useRef(null);

  const handleFlipNext = () => {
    bookRef.current?.flipNext();
  };

  const handleFlipPrev = () => {
    bookRef.current?.flipPrev();
  };

  const handleFlipToPage = (page) => {
    bookRef.current?.flip(page);
  };

  const getCurrentPage = () => {
    const current = bookRef.current?.getCurrentPageIndex();
    console.log('Trang hiện tại:', current);
  };

  return (
    <>
      <ReactFlipBook 
        ref={bookRef}
        width={500}
        height={700}
      >
        <div>Trang 1</div>
        <div>Trang 2</div>
      </ReactFlipBook>
      
      <button onClick={handleFlipPrev}>Trước</button>
      <button onClick={handleFlipNext}>Sau</button>
      <button onClick={() => handleFlipToPage(5)}>Đến trang 5</button>
      <button onClick={getCurrentPage}>Lấy trang hiện tại</button>
    </>
  );
}
```

### Các phương thức Ref

| Phương thức | Mô tả |
|-------------|-------|
| `flipNext()` | Lật sang trang tiếp theo |
| `flipPrev()` | Lật về trang trước |
| `flip(page: number)` | Lật đến trang cụ thể |
| `getCurrentPageIndex()` | Lấy index trang hiện tại |
| `getPageCount()` | Lấy tổng số trang |
| `startAutoFlip(delay: number, direction: 'next' \| 'prev')` | Bắt đầu tự động lật |
| `stopAutoFlip()` | Dừng tự động lật |
| `destroy()` | Hủy instance flipbook |
| `pageFlip()` | Truy cập instance PageFlip gốc |

## 🎨 Ví dụ Custom

### 1. Flipbook Responsive với Stretch Mode

```jsx
<ReactFlipBook
  width={500}
  height={700}
  size="stretch"
  minWidth={300}
  maxWidth={800}
  minHeight={400}
  maxHeight={1000}
  showNavigationButtons={true}
>
  <div>Trang 1</div>
  <div>Trang 2</div>
</ReactFlipBook>
```

### 2. Hiệu ứng lật nhanh với bóng đổ nhẹ

```jsx
<ReactFlipBook
  width={600}
  height={800}
  flippingTime={500}
  drawShadow={true}
  maxShadowOpacity={0.5}
  showNavigationButtons={true}
>
  <div>Trang 1</div>
  <div>Trang 2</div>
</ReactFlipBook>
```

### 3. Sách có bìa (Cover)

```jsx
<ReactFlipBook
  width={400}
  height={600}
  showCover={true}
  startPage={0}
>
  <div style={{ background: '#8B4513' }}>BÌA TRƯỚC</div>
  <div>Trang 1</div>
  <div>Trang 2</div>
  <div>Trang 3</div>
  <div style={{ background: '#8B4513' }}>BÌA SAU</div>
</ReactFlipBook>
```

### 4. Custom Navigation Buttons

```jsx
<ReactFlipBook
  width={500}
  height={700}
  showNavigationButtons={true}
  renderNavigationButton={(type, onClick) => (
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        [type === 'prev' ? 'left' : 'right']: '10px',
        transform: 'translateY(-50%)',
        background: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 10
      }}
    >
      {type === 'prev' ? '◀ Trước' : 'Sau ▶'}
    </button>
  )}
>
  <div>Trang 1</div>
  <div>Trang 2</div>
</ReactFlipBook>
```

### 5. Custom Page Numbers

```jsx
<ReactFlipBook
  width={500}
  height={700}
  showPageNumbers={true}
  renderPageNumber={(current, total) => (
    <div style={{
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(0,0,0,0.7)',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: 'bold'
    }}>
      Trang {current} / {total}
    </div>
  )}
>
  <div>Trang 1</div>
  <div>Trang 2</div>
</ReactFlipBook>
```

### 6. Custom Page Render với số trang tự động

```jsx
<ReactFlipBook
  width={500}
  height={700}
  renderPage={(page, index) => (
    <div style={{
      width: '100%',
      height: '100%',
      background: index % 2 === 0 ? '#f0f0f0' : '#ffffff',
      padding: '20px',
      boxSizing: 'border-box',
      position: 'relative'
    }}>
      <h2>Trang {index + 1}</h2>
      {page}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        fontSize: '12px',
        color: '#666'
      }}>
        {index + 1}
      </div>
    </div>
  )}
>
  <div>Nội dung 1</div>
  <div>Nội dung 2</div>
  <div>Nội dung 3</div>
</ReactFlipBook>
```

### 7. Auto Flip (Tự động lật trang)

```jsx
<ReactFlipBook
  width={500}
  height={700}
  autoFlipDelay={3000} // Lật sau mỗi 3 giây
  autoFlipDirection="next" // Lật về phía trước
  showNavigationButtons={true}
  showPageNumbers={true}
>
  <div>Trang 1</div>
  <div>Trang 2</div>
  <div>Trang 3</div>
</ReactFlipBook>
```

**Lưu ý**: Auto flip sẽ tự động reset khi người dùng tương tác (click nút, dùng bàn phím, hoặc flip thủ công).

### 8. Vô hiệu hóa flip bằng click, chỉ dùng buttons

```jsx
<ReactFlipBook
  width={500}
  height={700}
  disableFlipByClick={true}
  showNavigationButtons={true}
  showPageCorners={false}
>
  <div>Trang 1 - Chỉ dùng nút để lật</div>
  <div>Trang 2</div>
</ReactFlipBook>
```

### 9. Controlled Component với Events

```jsx
function App() {
  const [page, setPage] = useState(0);

  const handleFlip = (e) => {
    console.log('Flip event:', e);
  };

  const handleStateChange = (e) => {
    console.log('State changed:', e);
  };

  return (
    <>
      <ReactFlipBook
        width={500}
        height={700}
        currentPage={page}
        onPageChange={(newPage) => {
          console.log('Đã chuyển sang trang:', newPage);
          setPage(newPage);
        }}
        onFlip={handleFlip}
        onChangeState={handleStateChange}
      >
        <div>Trang 1</div>
        <div>Trang 2</div>
        <div>Trang 3</div>
      </ReactFlipBook>

      <div>
        <button onClick={() => setPage(0)}>Trang 1</button>
        <button onClick={() => setPage(1)}>Trang 2</button>
        <button onClick={() => setPage(2)}>Trang 3</button>
      </div>
    </>
  );
}
```

### 10. Mobile-Optimized Flipbook

```jsx
<ReactFlipBook
  width={350}
  height={500}
  size="stretch"
  maxWidth={500}
  mobileScrollSupport={true}
  swipeDistance={20}
  useMouseEvents={true}
  showPageCorners={true}
>
  <div>Trang 1</div>
  <div>Trang 2</div>
</ReactFlipBook>
```

## ⌨️ Phím tắt

Khi `enableKeyboardNav={true}` (mặc định):
- **←** (Left Arrow): Lật về trang trước
- **→** (Right Arrow): Lật sang trang sau

## 💡 Tips & Best Practices

1. **Width và Height là bắt buộc**: Luôn luôn cung cấp `width` và `height` để PageFlip hoạt động chính xác
2. **Kích thước trang**: Đảm bảo tất cả các trang con có cùng kích thước để hiệu ứng lật mượt mà
3. **Responsive Design**: 
   - Sử dụng `size="stretch"` kết hợp với `minWidth`, `maxWidth`, `minHeight`, `maxHeight`
   - Hoặc tính toán `width` và `height` dựa trên viewport
4. **Performance**: 
   - Sử dụng `renderOnlyPageLengthChange={true}` nếu nội dung trang thay đổi thường xuyên
   - Tránh render quá nhiều trang cùng lúc (nên < 100 trang)
5. **Mobile**: 
   - Set `mobileScrollSupport={true}` để scroll được trên mobile
   - Giảm `swipeDistance` cho trải nghiệm mobile tốt hơn
6. **Auto flip**: Khi dùng auto flip, nên hiển thị navigation buttons để người dùng có thể điều khiển thủ công
7. **Cover Mode**: Khi `showCover={true}`, trang đầu và trang cuối sẽ được xử lý như bìa sách

## 🎯 Use Cases

### Catalogue/Portfolio
```jsx
<ReactFlipBook
  width={800}
  height={600}
  size="stretch"
  maxWidth={1000}
  showCover={true}
  flippingTime={800}
>
  <div className="cover">My Portfolio</div>
  {portfolioItems.map(item => (
    <div key={item.id}>{item.content}</div>
  ))}
  <div className="cover">Thank You</div>
</ReactFlipBook>
```

### Magazine/Comic Reader
```jsx
<ReactFlipBook
  width={600}
  height={800}
  usePortrait={true}
  showNavigationButtons={true}
  showPageNumbers={true}
  enableKeyboardNav={true}
>
  {comicPages.map((page, i) => (
    <img key={i} src={page} alt={`Page ${i+1}`} />
  ))}
</ReactFlipBook>
```

### Photo Album
```jsx
<ReactFlipBook
  width={700}
  height={500}
  autoFlipDelay={5000}
  drawShadow={true}
  maxShadowOpacity={0.3}
  showPageNumbers={true}
>
  {photos.map((photo, i) => (
    <div key={i} style={{background: `url(${photo})`}} />
  ))}
</ReactFlipBook>
```

## 📚 API Reference

### TypeScript Types

```typescript
interface ReactFlipBookProps {
  // Required
  width: number;
  height: number;
  children: ReactNode;
  
  // PageFlip Core
  size?: 'fixed' | 'stretch';
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  startPage?: number;
  flippingTime?: number;
  usePortrait?: boolean;
  startZIndex?: number;
  autoSize?: boolean;
  showCover?: boolean;
  drawShadow?: boolean;
  maxShadowOpacity?: number;
  mobileScrollSupport?: boolean;
  clickEventForward?: boolean;
  useMouseEvents?: boolean;
  swipeDistance?: number;
  showPageCorners?: boolean;
  disableFlipByClick?: boolean;
  
  // React Extensions
  className?: string;
  style?: CSSProperties;
  currentPage?: number;
  showNavigationButtons?: boolean;
  showPageNumbers?: boolean;
  enableKeyboardNav?: boolean;
  autoFlipDelay?: number;
  autoFlipDirection?: 'next' | 'prev';
  renderOnlyPageLengthChange?: boolean;
  
  // Custom Renderers
  renderPage?: (page: ReactElement, index: number) => ReactElement;
  renderNavigationButton?: (type: 'prev' | 'next', onClick: () => void) => ReactNode;
  renderPageNumber?: (current: number, total: number) => ReactNode;
  
  // Events
  onPageChange?: (page: number) => void;
  onFlip?: (e: FlipEvent) => void;
  onChangeOrientation?: (e: OrientationEvent) => void;
  onChangeState?: (e: StateEvent) => void;
  onInit?: (e: InitEvent) => void;
  onUpdate?: (e: UpdateEvent) => void;
}

interface ReactFlipBookRef {
  pageFlip: () => PageFlip | undefined;
  flipNext: () => void;
  flipPrev: () => void;
  flip: (page: number) => void;
  getCurrentPageIndex: () => number | undefined;
  getPageCount: () => number | undefined;
  destroy: () => void;
  startAutoFlip: (delay: number, direction: 'next' | 'prev') => void;
  stopAutoFlip: () => void;
}
```

## 🔗 Liên kết hữu ích

- **PageFlip Library**: [https://github.com/Nodlik/StPageFlip](https://github.com/Nodlik/StPageFlip) - Thư viện gốc
- **NPM Package**: [@vuvandinh203/react-flipbook](https://www.npmjs.com/package/@vuvandinh203/react-flipbook)
- **Demo & Examples**: [Coming soon]

## 📄 License

MIT License

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng tạo issue hoặc pull request trên GitHub.

## 📧 Liên hệ

- NPM: [@vuvandinh203/react-flipbook](https://www.npmjs.com/package/@vuvandinh203/react-flipbook)
- GitHub: [@vuvandinh123](https://github.com/vuvandinh123/react-flipbook)

---

**Made with ❤️ by Vu Van Dinh | Built on top of PageFlip library**