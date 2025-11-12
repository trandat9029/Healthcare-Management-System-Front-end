import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({
    open,
    area,
    onClose,
    children,
    closeOnEsc = true,
    }) {
    // Khóa scroll nền khi mở
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = prev);
    }, [open]);

    // Đóng bằng ESC (tuỳ chọn)
    useEffect(() => {
        if (!open || !closeOnEsc) return;
        const onKey = (e) => e.key === "Escape" && onClose?.();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, closeOnEsc, onClose]);

    if (!open) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[1000] flex items-center justify-center"
            aria-modal="true"
            role="dialog"
            // aria-labelledby={title ? "modal-title" : undefined}
        >
        {/* Backdrop: chặn nền nhưng KHÔNG đóng khi click */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hộp modal */}
        <div
            className={`relative z-[1001] ${area} rounded-2xl bg-white p-6 shadow-xl`}
            // Chặn sự kiện từ nội dung “lọt” ra backdrop
            onMouseDown={(e) => e.stopPropagation()}
        >
            {/* Nút đóng (góc phải) */}
            <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full cursor-pointer bg-gray-200 hover:bg-gray-500 active:scale-95 hover:text-white"
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
            </svg>
            </button>

            

            <div className="text-sm text-gray-700">{children}</div>

            {/* Footer mẫu: có thể bỏ nếu không cần */}
            {/* <div className="mt-6 flex justify-end gap-3"> */}
            {/* <button
                onClick={onClose}
                className="rounded-lg border px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
                Cancel
            </button> */}
            {/* Ví dụ nút hành động
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Confirm
            </button> */}
            {/* </div> */}
        </div>
        </div>,
        document.body
    );
}
