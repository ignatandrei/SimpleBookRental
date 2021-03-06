using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookRentalAPI.Controllers
{
    public class CommitInfo
    {
        public string LatestCommit { get; set; }
        public DateTime DateCommit { get; set; }
        public string LastAuthor { get; set; }
    }
    [ApiController]
    [Route("[controller]/[Action]")]
    public class InfoController
    {
        public CommitInfo GetLatestCommit()
        {
            try
            {
                return
                    new CommitInfo()
                    {
                        LatestCommit = "{LatestCommit}",
                        DateCommit = DateTime.ParseExact("{DateCommit}", "yyyyMMdd:HHmmss", null),
                        LastAuthor = "{LastAuthor}"
                    }
                    ;
            }
            catch(Exception ex)
            {
                return
                    new CommitInfo()
                    {
                        LatestCommit = "unknown commit",
                        DateCommit = DateTime.UtcNow,
                        LastAuthor = "Both"
                    }
                    ;
            }
        }
    }
}
