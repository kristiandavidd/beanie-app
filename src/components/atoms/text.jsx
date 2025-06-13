import clsx from "clsx";

const createTextComponent = (Tag, baseStyle) => {
  return function Text({ children, className = "", ...props }) {
    return (
      <Tag className={clsx(baseStyle, className)} {...props}>
        {children}
      </Tag>
    );
  };
};

export const Heading1 = createTextComponent(
  "h1",
  "text-2xl md:text-4xl  font-marcellus "
);
export const Heading2 = createTextComponent("h2", "text-3xl  font-marcellus");
export const Heading3 = createTextComponent("h3", "text-md md:text-2xl font-marcellus");
export const Heading4 = createTextComponent("h4", "text-xl  font-marcellus");
export const Heading5 = createTextComponent("h5", "text-lg  font-marcellus");
export const Heading6 = createTextComponent("h6", "text-base  font-marcellus");

export const ParagraphPrimary = createTextComponent(
  "p",
  "text-base text-primary leading-relaxed font-poppins"
);
export const ParagraphSecondary = createTextComponent(
  "p",
  "text-base text-secondary leading-relaxed font-marcellus"
);
export const ParagraphMuted = createTextComponent(
  "p",
  "text-sm text-gray-500 leading-snug font-marcellus"
);

export const InlinePrimary = createTextComponent(
  "span",
  "text-primary font-marcellus"
);
export const InlineSecondary = createTextComponent(
  "span",
  "text-secondary font-marcellus"
);
export const InlineMuted = createTextComponent(
  "span",
  "text-gray-500 font-marcellus"
);
export const InlineBold = createTextComponent(
  "span",
  "font-semibold font-marcellus"
);
export const InlineItalic = createTextComponent(
  "span",
  "italic font-marcellus"
);

export const Caption = createTextComponent(
  "small",
  "text-xs text-gray-400 font-poppins"
);
export const Note = createTextComponent(
  "small",
  "text-xs text-secondary italic font-poppins"
);
