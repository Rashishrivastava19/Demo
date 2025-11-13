# TODO: Implement Profile Picture Upload in SettingsPage

## Tasks
- [x] Add state for profile image and preview in SettingsPage.jsx
- [x] Add file input for image selection in profile avatar section
- [x] Implement instant image preview on file selection
- [x] Update save functionality to show success feedback
- [x] Test the implementation by running the app
- [x] Update sidebar profile icon to reflect uploaded image
- [x] Remove edit icon from profile avatar
- [x] Fix profile image persistence when navigating back to settings

## Notes
- Use existing styling conventions
- No new dependencies added
- Success feedback via alert (as toast not available)
- Profile image persists across app navigation via global state
- Removed edit icon overlay for cleaner UI
- Settings page now receives current profile image as prop for persistence
