import Image from "next/image";

export default function Logo({ className, width = 180, height = 38 }) {
    return (
        <Image
            className={className}
            src="/images/logo-transparent.png"
            alt="Beanie - Your Best Coffee Shop"
            width={width}
            height={height}
            priority
        />
    );
}