import { Comments } from "src/comments/entities/comment.entity";
import { Video } from "src/videos/entities/video.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column('text')
    name: string

    @Column('text', {
        unique: true
    })
    username: string
    
    @Column('text', {
        unique: true
    })
    email: string

    @Column('text', {
        select: true
    })
    password: string

    @Column('bool', {
        default: true
    })
    isActive: boolean


    @OneToMany(
        () => Video,
        ( video ) => video.user
    )
    videos: Video

    @OneToMany(
        () => Comments,
        ( comments ) => comments.user
    )
    comments: Comments

    @BeforeInsert()
    checkLowerInsert(){
        this.email = this.email.toLowerCase().trim()
        this.username = this.username.toLowerCase().trim()
    }

    @BeforeUpdate()
    checkLowerUpdate(){
        this.email = this.email.toLowerCase().trim()
        this.username = this.username.toLowerCase().trim()
    }


}
