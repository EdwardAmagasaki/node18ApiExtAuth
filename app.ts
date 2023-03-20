
export interface FrontPagePostLista {
    frontPagePostListaId: number;
    do0FrontPagePostsId: number;
    frontPagePosts: FrontPagePosts;
    do0AvatarName: string;
    do0UserName: string;
    rascunho: boolean;
    autor: string;
    data: string | null;
    titulo: string;
    introducao: string;
    descricao: string;
    pasta: string;
    linkExterno: boolean;
    linkUrl: string;
    reserva1: boolean;
}

export interface FrontPagePosts {
    do0FrontPagePostsId: number;
    frontPagePostLista: FrontPagePostLista[];
    do0AvatarName: string;
    do0UserName: string;
    rascunho: boolean;
    autor: string;
    data: string | null;
    titulo: string;
    introducao: string;
    descricao: string;
    pasta: string;
    linkExterno: boolean;
    linkUrl: string;
    reserva1: boolean;
}
