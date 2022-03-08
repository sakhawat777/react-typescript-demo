type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
    // generic type button
    // Omit object Properties that removes the specified properties
} & Omit<React.ComponentProps<'button'>, 'children'> 
export const CustomButton = ({variant, children, ...rest}: ButtonProps) => {
    return <button className={`class-with-${variant}` } {...rest}>{children}</button>
}