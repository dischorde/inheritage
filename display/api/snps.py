from restless.dj import DjangoResource

from display.models import Snp

class SnoResource(DjangoResource):
    def detail(self, id):
        snp = Snp.objects.get(pk=pk)

        return {
            'title': post.title,
            'author': {
                'id': post.user.id,
                'username': post.user.username,
                'date_joined': post.user.date_joined,

            },
            'body': post.content,
            # ...
        }
