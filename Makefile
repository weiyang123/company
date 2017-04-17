SRC_FILES=./dist/*

publish-dev:
	rsync -rvI --delete-after --progress $(SRC_FILES) root@115.29.202.141:$(DEV_PATH)$(project)

publish-prod:
	rsync -rvI --delete-after --progress $(SRC_FILES) root@115.29.202.141:$(ONLINE_PATH)$(project)

.PHONY: publish-dev publish-prod

npm run dev 
npm run build 
