##remount drive with metadata in WSL
sudo umount /mnt/c
sudo mount -t drvfs C: /mnt/c -o metadata
