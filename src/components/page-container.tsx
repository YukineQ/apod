export const PageContainer = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='px-6 py-10 md:pt-14'>
            {children}
        </div>
    )
}