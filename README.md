## Command line Node.js app for file and directory listing

- Wraps `ls`.
- Call with `> nodeclis [options]`

Options: 
  - see all files (like `ls -a`)
`> cli-app list --all`
  - see long listing fomat (like `ls -l`)
`> cli-app list --long`
  - pass in optional directory (default is cwd)
`> cli-app list ~/ --long`
