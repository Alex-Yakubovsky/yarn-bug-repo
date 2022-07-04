import Fastify from 'fastify'
import * as _ from '@fastify/static';

const fastify = Fastify()

fastify.route({
    method: 'GET',
    url: '/',
    handler: function (req, reply) {
        reply.sendFile('...')
    }
})