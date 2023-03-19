export type FileProps = {
    file_id: string;
    entity_id: string;
    name: string;
    size: number;
    extension: string;
    average_color: string;
    is_deleted: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: string;
};

export class File {
    constructor(public props: FileProps) {}

    get file_id(): string {
        return this.file_id;
    }

    get entity_id(): string {
        return this.entity_id;
    }

    get name(): string {
        return this.name;
    }

    get size(): number {
        return this.size;
    }

    get extension(): string {
        return this.extension;
    }

    get average_color(): string {
        return this.average_color;
    }

    get is_deleted(): boolean {
        return this.is_deleted;
    }

    get created_at(): string {
        return this.created_at;
    }

    get updated_at(): string {
        return this.updated_at;
    }

    get deleted_at(): string {
        return this.deleted_at;
    }

    toJSON() {
        return {
            file_id: this.file_id,
            entity_id: this.entity_id,
            name: this.name,
            size: this.size,
            extension: this.extension,
            average_color: this.average_color,
            isDeleted: this.is_deleted,
            createdAt: this.created_at,
            updatedAt: this.updated_at,
            deletedAt: this.deleted_at,
        };
    }
}
