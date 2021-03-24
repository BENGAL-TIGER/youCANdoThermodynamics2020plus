#!/bin/sh
# using the system shell for "universal" applicability


# run this "script" from within the top level of the `.jupyter` 
# config you wish to make active

# symlinks user's `~/.jupyter/` to current directory
# user cannot have an existing `.jupyter/`

ln -s ${PWD} "~/.jupyter"
