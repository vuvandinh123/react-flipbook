# React FlipBook Documentation

## Giới thiệu

React FlipBook là một thư viện React component giúp tạo hiệu ứng lật trang sách 3D mượt mà và chân thực. Thư viện hỗ trợ nhiều tính năng như tự động lật trang, điều hướng bằng phím, nút điều hướng tùy chỉnh và nhiều hơn nữa.

## Cài đặt

```bash
npm install react-flipbook
# hoặc
yarn add react-flipbook
```

## Sử dụng cơ bản

```jsx
import React from 'react';
import { ReactFlipBook } from 'react-flipbook';

function App() {
  return (
    <ReactFlipBook
      style={{ width: '800px', height: '600px' }}
      showNavigationButtons={true}
      showPageNumbers={true}
    >
      <div>Trang 1</div>
      <div>Trang 2</div>
      <div>Trang 3</div>
      <div>Trang 4</div>
    </ReactFlipBook>
  );
}
```

## Props

### Props cơ bản

| Prop | Type | Mặc định | Mô tả |
|------|------|----------|-------|
| `children` | `ReactElement[]` | - | Các trang của sách (mỗi child là một trang) |
| `className` | `string` | `''` | CSS class cho container |
| `style` | `CSSProperties` | `{}` | Inline style cho container |
| `currentPage` | `number` | - | Trang hiện tại (controlled component) |
| `onPageChange` | `(page: number) => void` | - | Callback khi trang thay đổi |

### Props hiển thị

| Prop | Type | Mặc định | Mô tả |
|------|------|----------|-------|
| `showNavigationButtons` | `boolean` | `false` | Hiển thị nút điều hướng Prev/Next |
| `showPageNumbers` | `boolean` | `false` | Hiển thị số trang hiện tại |
| `renderNavigationButton` | `(direction: 'prev' \| 'next', onClick: () => void) => ReactElement` | - | Render custom cho nút điều hướng |
| `renderPageNumber` | `(currentPage: number, totalPages: number) => ReactElement` | - | Render custom cho số trang |
| `renderPage` | `(page: ReactElement, index: number) => ReactElement` | - | Render custom cho mỗi trang |

### Props tối ưu

| Prop | Type | Mặc định | Mô tả |
|------|------|----------|-------|
| `renderOnlyPageLengthChange` | `boolean` | `false` | Chỉ re-render khi số lượng trang thay đổi |

### Props điều hướng

| Prop | Type | Mặc định | Mô tả |
|------|------|----------|-------|
| `enableKeyboardNav` | `boolean` | `true` | Cho phép điều hướng bằng phím mũi tên |

### Props tự động lật trang

| Prop | Type | Mặc định | Mô tả |
|------|------|----------|-------|
| `autoFlipDelay` | `number` | - | Thời gian delay giữa các lần lật tự động (ms) |
| `autoFlipDirection` | `'next' \| 'prev'` | `'next'` | Hướng lật tự động |

## Ref Methods

Component cung cấp các methods thông qua ref để điều khiển flipbook:

```jsx
import React, { useRef } from 'react';
import { ReactFlipBook, ReactFlipBookRef } from 'react-flipbook';

function App() {
  const flipBookRef = useRef<ReactFlipBookRef>(null);

  const handleFlipNext = () => {
    flipBookRef.current?.flipNext();
  };

  return (
    <>
      <ReactFlipBook ref={flipBookRef}>
        {/* pages */}
      </ReactFlipBook>
      <button onClick={handleFlipNext}>Next Page</button>
    </>
  );
}
```

### Available Methods

| Method | Signature | Mô tả |
|--------|-----------|-------|
| `flipNext` | `() => void` | Lật sang trang tiếp theo |
| `flipPrev` | `() => void` | Lật về trang trước |
| `flip` | `(page: number) => void` | Lật đến trang chỉ định |
| `getCurrentPageIndex` | `() => number \| undefined` | Lấy index trang hiện tại |
| `getPageCount` | `() => number \| undefined` | Lấy tổng số trang |
| `startAutoFlip` | `(delay: number, direction: 'next' \| 'prev') => void` | Bắt đầu tự động lật trang |
| `stopAutoFlip` | `() => void` | Dừng tự động lật trang |
| `destroy` | `() => void` | Hủy instance của flipbook |
| `pageFlip` | `() => PageFlip \| null` | Truy cập instance PageFlip gốc |

## Ví dụ nâng cao

### 1. Custom Navigation Buttons

```jsx
<ReactFlipBook
  showNavigationButtons={true}
  renderNavigationButton={(direction, onClick) => (
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        [direction === 'prev' ? 'left' : 'right']: '10px',
        transform: 'translateY(-50%)',
        padding: '10px 20px',
        background: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {direction === 'prev' ? '← Trước' : 'Sau →'}
    </button>
  )}
>
  {/* pages */}
</ReactFlipBook>
```

### 2. Custom Page Numbers

```jsx
<ReactFlipBook
  showPageNumbers={true}
  renderPageNumber={(current, total) => (
    <div
      style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '8px 16px',
        background: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        borderRadius: '20px'
      }}
    >
      Trang {current} / {total}
    </div>
  )}
>
  {/* pages */}
</ReactFlipBook>
```

### 3. Controlled Component

```jsx
function App() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <ReactFlipBook
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      >
        {/* pages */}
      </ReactFlipBook>
      
      <div>
        <button onClick={() => setCurrentPage(0)}>Về đầu</button>
        <button onClick={() => setCurrentPage(currentPage - 1)}>Trước</button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Sau</button>
      </div>
    </>
  );
}
```

### 4. Auto Flip

```jsx
<ReactFlipBook
  autoFlipDelay={3000} // Tự động lật sau 3 giây
  autoFlipDirection="next" // Lật về phía trước
>
  {/* pages */}
</ReactFlipBook>
```

### 5. Custom Page Rendering

```jsx
<ReactFlipBook
  renderPage={(page, index) => (
    <div
      style={{
        padding: '20px',
        background: index % 2 === 0 ? '#f0f0f0' : '#ffffff'
      }}
    >
      <h3>Trang {index + 1}</h3>
      {page}
    </div>
  )}
>
  {/* pages */}
</ReactFlipBook>
```

### 6. Sử dụng với Images

```jsx
<ReactFlipBook
  style={{ width: '1000px', height: '700px' }}
  showNavigationButtons={true}
  showPageNumbers={true}
>
  <div style={{ 
    backgroundImage: 'url("/images/page1.jpg")',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  }} />
  <div style={{ 
    backgroundImage: 'url("/images/page2.jpg")',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  }} />
  {/* more pages */}
</ReactFlipBook>
```

## Best Practices

### 1. Kích thước cố định

Luôn set kích thước cố định cho FlipBook để đảm bảo hiệu ứng lật trang hoạt động tốt:

```jsx
<ReactFlipBook style={{ width: '800px', height: '600px' }}>
  {/* pages */}
</ReactFlipBook>
```

### 2. Tối ưu performance

Sử dụng `renderOnlyPageLengthChange` khi nội dung trang thay đổi thường xuyên nhưng số lượng trang không đổi:

```jsx
<ReactFlipBook renderOnlyPageLengthChange={true}>
  {/* pages */}
</ReactFlipBook>
```

### 3. Keyboard Navigation

Tắt keyboard navigation nếu bạn muốn tự xử lý:

```jsx
<ReactFlipBook enableKeyboardNav={false}>
  {/* pages */}
</ReactFlipBook>
```

### 4. Cleanup

Component tự động cleanup khi unmount, nhưng bạn có thể manually destroy:

```jsx
const flipBookRef = useRef<ReactFlipBookRef>(null);

useEffect(() => {
  return () => {
    flipBookRef.current?.destroy();
  };
}, []);
```

## Events

### onPageChange

Được gọi mỗi khi trang thay đổi:

```jsx
<ReactFlipBook
  onPageChange={(page) => {
    console.log('Current page:', page);
    // Lưu vào localStorage
    localStorage.setItem('lastPage', page.toString());
    // Analytics
    trackPageView(page);
  }}
>
  {/* pages */}
</ReactFlipBook>
```

## TypeScript Support

Thư viện được viết bằng TypeScript và cung cấp đầy đủ type definitions:

```typescript
import { ReactFlipBook, ReactFlipBookProps, ReactFlipBookRef } from 'react-flipbook';

const MyComponent: React.FC = () => {
  const flipBookRef = useRef<ReactFlipBookRef>(null);
  
  const props: ReactFlipBookProps = {
    showNavigationButtons: true,
    showPageNumbers: true,
    onPageChange: (page: number) => console.log(page)
  };

  return <ReactFlipBook ref={flipBookRef} {...props}>{/* pages */}</ReactFlipBook>;
};
```

## Troubleshooting

### Trang không lật được

- Đảm bảo bạn đã set kích thước cố định cho FlipBook
- Kiểm tra số lượng children (cần ít nhất 2 trang)
- Verify rằng children là valid React elements

### Performance issues

- Sử dụng `renderOnlyPageLengthChange={true}`
- Tối ưu nội dung trong mỗi trang
- Sử dụng React.memo cho page components
- Lazy load images nếu có nhiều ảnh

### Auto flip không hoạt động

- Kiểm tra `autoFlipDelay` phải lớn hơn 0
- Đảm bảo component đã được initialize
- Kiểm tra không có tương tác manual nào đang reset auto flip

## License

MIT

## Support

Nếu bạn gặp vấn đề hoặc có câu hỏi, vui lòng tạo issue trên GitHub repository.