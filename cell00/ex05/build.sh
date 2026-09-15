if [ $# -eq 0 ]
then
	echo "No arguments supplied"
	exit 1
else
	for dir in "$@"
	do
		mkdir "ex$dir"
	done
fi
