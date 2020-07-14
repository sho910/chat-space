## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null false, unique: true|
|password|string|null false|

### Association
- has_many : groups
- has_many : posts

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|user_id|integer|null: false foreign_key: true|

### Association
- has_many :user through groups_users
- has_many :posts

## Groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false|
|user_id|integer|null: false|

### Association
- belongs_to :group
- belongs_to :user

## postsテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false foreign_key: true|
|group_id|integer|null: false foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group