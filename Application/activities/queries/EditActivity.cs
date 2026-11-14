using Domain;
using MediatR;
using Persistence;
using AutoMapper;

namespace Application.activities.queries;

public class EditActivity
{
    public class Command : IRequest
    {
        public required Activity Activity;
    }

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.Activity.Id], cancellationToken)
                ?? throw new Exception("Cannot find the activity");

            // activity.Title = request.Activity.Title;
            mapper.Map(request.Activity, activity);

            await context.SaveChangesAsync();
        }
    }
}