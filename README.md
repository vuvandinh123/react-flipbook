# React Flipbook - User Guide  
This library is built and improved from the `page-flip` library, adding React-friendly features such as hooks, auto-flip, keyboard navigation, and easier customization.


📦 **Installation**  
```bash
npm i @vuvandinh203/react-flipbook
```

**📖Document language**

English | [Tiếng Việt](https://github.com/vuvandinh123/react-flipbook/blob/main/docs/README_VN.md)

🚀 **Basic Usage**  
```jsx
import React from 'react';
import { ReactFlipBook } from '@vuvandinh203/react-flipbook';

function App() {
  return (
    <ReactFlipBook
      width={500}  // Required
      height={700} // Required
      showNavigationButtons={true}
      showPageNumbers={true}
    >
      <div className="page">Page 1</div>
      <div className="page">Page 2</div>
      <div className="page">Page 3</div>
      <div className="page">Page 4</div>
    </ReactFlipBook>
  );
}
```

📋 **Props (Parameters)**  

### Core Props  
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | - | **REQUIRED** - Width of each page (px) |
| `height` | `number` | - | **REQUIRED** - Height of each page (px) |
| `className` | `string` | `''` | CSS class for container |
| `style` | `CSSProperties` | `{}` | Inline styles for container |
| `children` | `ReactNode` | - | Book pages (required) |
| `currentPage` | `number` | - | Current page (controlled mode) |
| `onPageChange` | `(page: number) => void` | - | Callback when page changes |

### PageFlip Core Props (Flip Animation Settings)  
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'fixed' \| 'stretch'` | `'fixed'` | Size mode: fixed or stretch |
| `minWidth` | `number` | - | Min width (px) when `size='stretch'` |
| `maxWidth` | `number` | - | Max width (px) when `size='stretch'` |
| `minHeight` | `number` | - | Min height (px) when `size='stretch'` |
| `maxHeight` | `number` | - | Max height (px) when `size='stretch'` |
| `startPage` | `number` | `0` | Starting page on init |
| `flippingTime` | `number` | `1000` | Flip duration (ms) |
| `usePortrait` | `boolean` | `true` | Use portrait (vertical) mode |
| `startZIndex` | `number` | `0` | Initial z-index for pages |
| `autoSize` | `boolean` | `true` | Auto-resize pages |
| `showCover` | `boolean` | `false` | Show book covers (first & last pages special) |
| `drawShadow` | `boolean` | `true` | Draw shadow during flip |
| `maxShadowOpacity` | `number` | `1` | Max shadow opacity (0–1) |
| `mobileScrollSupport` | `boolean` | `true` | Enable scroll on mobile |
| `clickEventForward` | `boolean` | `true` | Forward click events |
| `useMouseEvents` | `boolean` | `true` | Enable mouse events |
| `swipeDistance` | `number` | `30` | Minimum swipe distance (px) |
| `showPageCorners` | `boolean` | `true` | Show draggable page corners |
| `disableFlipByClick` | `boolean` | `false` | Disable flipping by clicking |

### React-Specific Props (Extended Features)  
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showNavigationButtons` | `boolean` | `false` | Show prev/next buttons |
| `showPageNumbers` | `boolean` | `false` | Show page numbers |
| `enableKeyboardNav` | `boolean` | `true` | Enable keyboard navigation (← →) |
| `autoFlipDelay` | `number` | - | Delay between auto flips (ms) |
| `autoFlipDirection` | `'next' \| 'prev'` | `'next'` | Auto flip direction |
| `renderPage` | `(page: ReactElement, index: number) => ReactElement` | - | Custom render per page |
| `renderNavigationButton` | `(type: 'prev' \| 'next', onClick: () => void) => ReactNode` | - | Custom navigation button |
| `renderPageNumber` | `(current: number, total: number) => ReactNode` | - | Custom page number display |
| `renderOnlyPageLengthChange` | `boolean` | `false` | Re-render only when page count changes |

### PageFlip Events  
| Prop | Type | Description |
|------|------|-------------|
| `onFlip` | `(e: FlipEvent) => void` | Triggered when flip starts |
| `onChangeOrientation` | `(e: OrientationEvent) => void` | Triggered on orientation change |
| `onChangeState` | `(e: StateEvent) => void` | Triggered on state change |
| `onInit` | `(e: InitEvent) => void` | Triggered after initialization |
| `onUpdate` | `(e: UpdateEvent) => void` | Triggered on update |

🎮 **Using Ref (Advanced Control)**  
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
    console.log('Current page:', current);
  };

  return (
    <>
      <ReactFlipBook 
        ref={bookRef}
        width={500}
        height={700}
      >
        <div>Page 1</div>
        <div>Page 2</div>
      </ReactFlipBook>
      
      <button onClick={handleFlipPrev}>Previous</button>
      <button onClick={handleFlipNext}>Next</button>
      <button onClick={() => handleFlipToPage(5)}>Go to page 5</button>
      <button onClick={getCurrentPage}>Get current page</button>
    </>
  );
}
```

### Ref Methods  
| Method | Description |
|--------|-------------|
| `flipNext()` | Flip to next page |
| `flipPrev()` | Flip to previous page |
| `flip(page: number)` | Flip to specific page |
| `getCurrentPageIndex()` | Get current page index |
| `getPageCount()` | Get total page count |
| `startAutoFlip(delay: number, direction: 'next' \| 'prev')` | Start auto flipping |
| `stopAutoFlip()` | Stop auto flipping |
| `destroy()` | Destroy flipbook instance |
| `pageFlip()` | Access original PageFlip instance |

🎨 **Custom Examples**

1. **Responsive Flipbook with Stretch Mode**  
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
  <div>Page 1</div>
  <div>Page 2</div>
</ReactFlipBook>
```

2. **Fast Flip with Light Shadow**  
```jsx
<ReactFlipBook
  width={600}
  height={800}
  flippingTime={500}
  drawShadow={true}
  maxShadowOpacity={0.5}
  showNavigationButtons={true}
>
  <div>Page 1</div>
  <div>Page 2</div>
</ReactFlipBook>
```

3. **Book with Covers**  
```jsx
<ReactFlipBook
  width={400}
  height={600}
  showCover={true}
  startPage={0}
>
  <div style={{ background: '#8B4513' }}>FRONT COVER</div>
  <div>Page 1</div>
  <div>Page 2</div>
  <div>Page 3</div>
  <div style={{ background: '#8B4513' }}>BACK COVER</div>
</ReactFlipBook>
```

4. **Custom Navigation Buttons**  
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
      {type === 'prev' ? '◀ Prev' : 'Next ▶'}
    </button>
  )}
>
  <div>Page 1</div>
  <div>Page 2</div>
</ReactFlipBook>
```

5. **Custom Page Numbers**  
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
      Page {current} / {total}
    </div>
  )}
>
  <div>Page 1</div>
  <div>Page 2</div>
</ReactFlipBook>
```

6. **Custom Page Render with Auto Page Numbers**  
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
      <h2>Page {index + 1}</h2>
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
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</ReactFlipBook>
```

7. **Auto Flip (Automatic Page Turning)**  
```jsx
<ReactFlipBook
  width={500}
  height={700}
  autoFlipDelay={3000} // Flip every 3 seconds
  autoFlipDirection="next"
  showNavigationButtons={true}
  showPageNumbers={true}
>
  <div>Page 1</div>
  <div>Page 2</div>
  <div>Page 3</div>
</ReactFlipBook>
```

8. **Disable Click Flip, Use Buttons Only**  
```jsx
<ReactFlipBook
  width={500}
  height={700}
  disableFlipByClick={true}
  showNavigationButtons={true}
  showPageCorners={false}
>
  <div>Page 1 - Use buttons only</div>
  <div>Page 2</div>
</ReactFlipBook>
```

9. **Controlled Component with Events**  
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
          console.log('Page changed to:', newPage);
          setPage(newPage);
        }}
        onFlip={handleFlip}
        onChangeState={handleStateChange}
      >
        <div>Page 1</div>
        <div>Page 2</div>
        <div>Page 3</div>
      </ReactFlipBook>

      <div>
        <button onClick={() => setPage(0)}>Page 1</button>
        <button onClick={() => setPage(1)}>Page 2</button>
        <button onClick={() => setPage(2)}>Page 3</button>
      </div>
    </>
  );
}
```

10. **Mobile-Optimized Flipbook**  
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
  <div>Page 1</div>
  <div>Page 2</div>
</ReactFlipBook>
```

⌨️ **Keyboard Shortcuts**  
When `enableKeyboardNav={true}` (default):  
- `←` (Left Arrow): Previous page  
- `→` (Right Arrow): Next page  

💡 **Tips & Best Practices**  
- **Width & Height are required**: Always provide `width` and `height` for correct rendering  
- **Page size consistency**: Ensure all child pages have the same dimensions for smooth flipping  
- **Responsive Design**:  
  - Use `size="stretch"` with `min/max` bounds  
  - Or calculate `width`/`height` based on viewport  
- **Performance**:  
  - Use `renderOnlyPageLengthChange={true}` if page content changes frequently  
  - Avoid rendering too many pages at once (< 100 recommended)  
- **Mobile**:  
  - Set `mobileScrollSupport={true}`  
  - Reduce `swipeDistance` for better mobile UX  
- **Auto flip**: Show navigation buttons so users can take control  
- **Cover Mode**: When `showCover={true}`, first and last pages act as hardcover  

🎯 **Use Cases**

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

📚 **API Reference**

### TypeScript Types  
```ts
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

🔗 **Useful Links**  
- Original Library: https://github.com/Nodlik/StPageFlip  
- NPM Package: `@vuvandinh203/react-flipbook`  
- Demo & Examples: [Coming soon]  

📄 **License**  
MIT License  

🤝 **Contributing**  
Contributions are welcome! Please open issues or pull requests on GitHub.  

📧 **Contact**  
- NPM: [@vuvandinh203/react-flipbook](https://www.npmjs.com/package/@vuvandinh203/react-flipbook)
- GitHub: [@vuvandinh123](https://github.com/vuvandinh123/react-flipbook)


Made with ❤️ by Vu Van Dinh | Built on top of PageFlip library