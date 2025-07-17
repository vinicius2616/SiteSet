type AvatarTitleProps = {
  children: React.ReactNode
}

export const AvatarTitle = ({ children }: AvatarTitleProps) => {
  return <strong className="text-gray-200 text-body-sm">{children}</strong>
}
