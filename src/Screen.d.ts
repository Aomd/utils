declare function openFullScreen(): Promise<void>;

declare function closeFullScreen(): Promise<void>;

declare function isFullScreen(): Boolean;

export{
  openFullScreen,
  closeFullScreen,
  isFullScreen
}