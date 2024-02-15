interface BlurredClipPathProps {
  children?: React.ReactNode;
  paddingBottom?: string;
  top?: string;
  smallSizeTop?: string;
  translateX?: string;
  rotateDeg?: string;
  width?: string;
  smallSizeWidth?: string;
  left?: string;
  smallSizeLeft?: string;
}

export default function BlurredClipPath({
  children,
  paddingBottom,
  top,
  smallSizeTop,
  translateX,
  rotateDeg,
  width,
  smallSizeWidth,
  left,
  smallSizeLeft,
}: BlurredClipPathProps) {
  return (
    <div className={`relative isolate -z-10 ${paddingBottom}`}>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 ${top} -z-10 transform-gpu overflow-hidden blur-3xl ${smallSizeTop}`}
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className={`relative ${left} aspect-[1155/678] ${width} ${translateX} ${rotateDeg} bg-gradient-to-tr from-[#5ab4cd] to-[#cfb41c] opacity-30 ${smallSizeLeft} ${smallSizeWidth}`}
        />
      </div>
      {children && children}
    </div>
  );
}
