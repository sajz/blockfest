confirm () {
	read -r -p "${1:-Are you sure? [y/N]} " response
	case $response in
		[yY][eE][sS]|[yY]) 
			true
			;;
		*)
			false
			;;
	esac
}

echo "WARNING: this script will remove any fill=\"anything\" for passed files :"
for var in "$@"
do
	echo "$var"
done
confirm && sed -i.bak "s/fill=\"[^ ]* //" $@
mkdir backup 2> /dev/null
mv *.bak backup
echo "backed files in backup/ directory."
